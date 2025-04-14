// Cart functionality
document.addEventListener('DOMContentLoaded', function() {
  // Initialize cart from localStorage if it exists
  let cart = JSON.parse(localStorage.getItem('globalMunchCart')) || [];
  
  // Update cart count on page load
  updateCartCount();
  
  // Add event listeners to all "Add to Cart" buttons
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
      // Get product information
      let productCard = this.closest('.product-card');
      
      if (productCard) {
        // For products on shop page and featured products
        let productName = productCard.querySelector('.product-card-title').textContent;
        let productPrice = parseFloat(productCard.querySelector('.price').textContent.replace('$', ''));
        let productImage = productCard.querySelector('img').src;
        
        addToCart(productName, productPrice, productImage);
      } else {
        // We might be on a product detail page
        let productContainer = document.querySelector('.product-info');
        if (productContainer) {
          let productName = productContainer.querySelector('h1, .font-h2').textContent;
          let productPrice = parseFloat(productContainer.querySelector('.product-price').textContent.replace('$', ''));
          let productImage = document.querySelector('#main-product-image, .product-main-image img').src;
          let quantity = 1;
          
          // Check if there's a quantity input
          let quantityInput = document.getElementById('quantity');
          if (quantityInput) {
            quantity = parseInt(quantityInput.value);
          }
          
          addToCart(productName, productPrice, productImage, quantity);
        }
      }
    });
  });
  
  // Add to Cart function
  function addToCart(name, price, image, quantity = 1) {
    // Check if product already exists in cart
    const existingItemIndex = cart.findIndex(item => item.name === name);
    
    if (existingItemIndex !== -1) {
      // If product exists, update quantity
      cart[existingItemIndex].quantity += quantity;
    } else {
      // If product doesn't exist, add it to cart
      cart.push({
        name: name,
        price: price,
        image: image,
        quantity: quantity
      });
    }
    
    // Save cart to localStorage
    saveCart();
    
    // Update cart count
    updateCartCount();
    
    // Show notification
    showNotification(`${name} added to cart!`);
  }
  
  // Update Cart Count
  function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    
    // Update cart count in header
    document.querySelectorAll('.cart-count, .mobile-cart-count').forEach(element => {
      element.textContent = cartCount;
    });
  }
  
  // Save cart to localStorage
  function saveCart() {
    localStorage.setItem('globalMunchCart', JSON.stringify(cart));
  }
  
  // Show notification
  function showNotification(message) {
    // Check if notification container exists, if not create it
    let notificationContainer = document.getElementById('cart-notification');
    
    if (!notificationContainer) {
      notificationContainer = document.createElement('div');
      notificationContainer.id = 'cart-notification';
      notificationContainer.style.position = 'fixed';
      notificationContainer.style.bottom = '20px';
      notificationContainer.style.right = '20px';
      notificationContainer.style.backgroundColor = 'var(--green)';
      notificationContainer.style.color = 'var(--white)';
      notificationContainer.style.padding = '1rem 1.5rem';
      notificationContainer.style.borderRadius = '0.5rem';
      notificationContainer.style.fontFamily = 'var(--font-primary)';
      notificationContainer.style.fontWeight = '800';
      notificationContainer.style.zIndex = '1000';
      notificationContainer.style.boxShadow = '4px 4px 0 0 var(--dark)';
      notificationContainer.style.border = '2px solid var(--dark)';
      notificationContainer.style.transform = 'translateY(100px)';
      notificationContainer.style.opacity = '0';
      notificationContainer.style.transition = 'all 0.3s ease';
      
      document.body.appendChild(notificationContainer);
    }
    
    // Set message
    notificationContainer.textContent = message;
    
    // Show notification
    setTimeout(() => {
      notificationContainer.style.transform = 'translateY(0)';
      notificationContainer.style.opacity = '1';
    }, 100);
    
    // Hide notification after 3 seconds
    setTimeout(() => {
      notificationContainer.style.transform = 'translateY(100px)';
      notificationContainer.style.opacity = '0';
    }, 3000);
  }
}); 