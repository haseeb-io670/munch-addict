// Page loader
document.addEventListener('DOMContentLoaded', function() {
  // Hide loader after content loads
  setTimeout(function() {
    const loader = document.getElementById('pageLoader');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 1000);
    }
  }, 1500);

  // Initialize parallax effect on mascot
  if (typeof Parallax !== 'undefined') {
    const mascotElement = document.getElementById('chilliMascotLoader');
    if (mascotElement) {
      new Parallax(mascotElement, {
        invertX: false,
        invertY: false,
        limitX: 5,
        limitY: 5
      });
    }
  }

  // Initialize Owl Carousel if jQuery and Owl are available
  if (typeof jQuery !== 'undefined' && typeof jQuery.fn.owlCarousel !== 'undefined') {
    // Product carousel
    $('.product-carousel').owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      navText: ['<span>&lt;</span>', '<span>&gt;</span>'],
      dots: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 4
        }
      }
    });

    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      navText: ['<span>&lt;</span>', '<span>&gt;</span>'],
      dots: true,
      autoplay: true,
      autoplayTimeout: 7000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
  }

  // Shop page functionality
  const categoryFilter = document.getElementById('category-filter');
  const sortFilter = document.getElementById('sort-filter');
  
  if (categoryFilter && sortFilter) {
    const products = document.querySelectorAll('.product-card');
    
    // categoryFilter.addEventListener('change', function() {
    //   filterProducts(products, this.value);
    // });
    
    sortFilter.addEventListener('change', function() {
      sortProducts(products, this.value);
    });
  }
  
  // Add to cart functionality
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cartCount = document.querySelector('.cart-count');
  const mobileCartCount = document.querySelector('.mobile-cart-count');
  
  if (addToCartButtons.length > 0 && cartCount) {
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Get current cart count and increment
        const currentCount = parseInt(cartCount.textContent);
        const newCount = currentCount + 1;
        
        // Update regular cart count
        cartCount.textContent = newCount;
        
        // Update mobile cart count if it exists
        if (mobileCartCount) {
          mobileCartCount.textContent = newCount;
        }
        
        // Apply bounce animation to cart counts
        cartCount.classList.add('cart-bounce');
        if (mobileCartCount) {
          mobileCartCount.classList.add('cart-bounce');
        }
        
        setTimeout(() => {
          cartCount.classList.remove('cart-bounce');
          if (mobileCartCount) {
            mobileCartCount.classList.remove('cart-bounce');
          }
        }, 300);
        
        // Change button text temporarily
        const originalText = button.textContent;
        button.textContent = 'Added!';
        button.classList.add('added');
        
        setTimeout(() => {
          button.textContent = originalText;
          button.classList.remove('added');
        }, 2000);
      });
    });
  }
  
  // Mobile menu toggle functionality
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  // const navbarLinks = document.querySelector('.navbar-links');
  
  // Mobile menu categories dropdown functionality
  const mobileMenuToggleBtn = document.querySelector('.mobile-nav-item.menu-toggle');
  const mobileMenuDropdown = document.querySelector('.mobile-menu-dropdown');

  if (mobileMenuToggleBtn && mobileMenuDropdown) {
    console.log("Mobile menu toggle and dropdown found");
    
    mobileMenuToggleBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log("Menu toggle clicked");
      
      this.classList.toggle('active');
      mobileMenuDropdown.classList.toggle('active');
      
      // Prevent event bubbling
      return false;
    });

    // Close mobile menu dropdown when clicking on a category
    const mobileMenuCategories = document.querySelectorAll('.mobile-menu-category');
    mobileMenuCategories.forEach(category => {
      category.addEventListener('click', () => {
        mobileMenuToggleBtn.classList.remove('active');
        mobileMenuDropdown.classList.remove('active');
      });
    });

    // Close mobile menu dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.mobile-nav-item.menu-toggle') && 
          !e.target.closest('.mobile-menu-dropdown')) {
        mobileMenuToggleBtn.classList.remove('active');
        mobileMenuDropdown.classList.remove('active');
      }
    });
  } else {
    console.log("Mobile menu toggle or dropdown not found", 
                "Toggle:", mobileMenuToggleBtn, 
                "Dropdown:", mobileMenuDropdown);
  }
  
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileMenuToggle.classList.toggle('active');
      navbarLinks.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });
  } else if (menuToggle) {
    menuToggle.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Otherwise just toggle the navbar links visibility
      if (navbarLinks) {
        navbarLinks.classList.toggle('active');
        document.body.classList.toggle('menu-open');
      }
    });
  }
});

// Filter products by category
function filterProducts(products, category) {
  products.forEach(product => {
    if (category === 'all' || product.dataset.category === category) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}

// Sort products by criteria
function sortProducts(products, sortOption) {
  const productsArray = Array.from(products);
  const productsContainer = document.querySelector('.products');
  
  if (!productsContainer) return;
  
  productsArray.sort((a, b) => {
    const priceA = parseFloat(a.querySelector('.price').textContent.replace('$', ''));
    const priceB = parseFloat(b.querySelector('.price').textContent.replace('$', ''));
    const nameA = a.querySelector('h3').textContent;
    const nameB = b.querySelector('h3').textContent;
    
    switch (sortOption) {
      case 'price-low':
        return priceA - priceB;
      case 'price-high':
        return priceB - priceA;
      case 'name-az':
        return nameA.localeCompare(nameB);
      case 'name-za':
        return nameB.localeCompare(nameA);
      default:
        return 0;
    }
  });
  
  // Clear and repopulate the container with sorted products
  productsArray.forEach(product => {
    productsContainer.appendChild(product);
  });
} 