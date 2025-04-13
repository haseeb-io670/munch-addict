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
    
    categoryFilter.addEventListener('change', function() {
      filterProducts(products, this.value);
    });
    
    sortFilter.addEventListener('change', function() {
      sortProducts(products, this.value);
    });
  }
  
  // Add to cart functionality
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cartCount = document.querySelector('.cart-count');
  
  if (addToCartButtons.length > 0 && cartCount) {
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Get current cart count and increment
        const currentCount = parseInt(cartCount.textContent);
        cartCount.textContent = currentCount + 1;
        
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