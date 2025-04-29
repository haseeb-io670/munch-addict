<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Shop | Global Munch</title>
  <meta content="Browse our collection of handcrafted spicy candies. Free shipping on orders over $50!" name="description">
  <meta content="Shop | Global Munch" property="og:title">
  <meta content="Browse our collection of handcrafted spicy candies. Free shipping on orders over $50!" property="og:description">
  <meta content="../public/images/63110b6db2d5a3a54be91925_%5BChilli%20Bomba%5D%20Open%20Graph.jpg" property="og:image">
  <meta property="og:type" content="website">
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <link href="../public/css/chilli-bomba.style.css" rel="stylesheet" type="text/css">
  <link href="../public/css/owl.carousel.min.css" rel="stylesheet" type="text/css">
  <link href="../public/css/custom-fonts.css" rel="stylesheet" type="text/css">
  <link href="../public/images/62ed40d01cef2848950ab6e5_icon.png" rel="shortcut icon" type="image/x-icon">
  <link href="../public/images/62ed40e67bb9991bc2bb9fdc_favicon.png" rel="apple-touch-icon">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Anton&family=Changa:wght@400;700;800&family=Fredoka:wght@400;500;600;700&family=Kalam&family=Nunito+Sans:opsz,wght@6..12,400;6..12,700&display=swap" rel="stylesheet">
  <script src="../public/js/jquery-3.6.0.min.js"></script>
  <script src="../public/js/owl.carousel.min.js"></script>
  <script src="../public/js/parallax.min.js"></script>
</head>

<body>
 
  <div id="pageLoader" class="loader">
    <div data-depth="0.2" class="w-embed w-script">
      <img src="../public/images/preloader.svg" alt="Munch Addict Loader">

     

  <script>
    document.addEventListener('DOMContentLoaded', function() {
      var scene = document.getElementById("chilliMascotLoader");
      var parallaxInstance = new Parallax(chilliMascotLoader);
    });
  </script>

  <style>
    @keyframes loader {
      0% {
        opacity: 1;
        pointer-events: all;
      }
      100% {
        opacity: 0;
        pointer-events: none;
      }
    }

    @keyframes float {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-20px);
      }
      100% {
        transform: translateY(0);
      }
    }

    #chilli-bro {
      display: block;
      width: auto;
      height: 30vh;
    }

    #pageLoader {
      pointer-events: none;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: loader 1s ease;
      animation-fill-mode: forwards;
      animation-delay: 3s;
    }
  </style>
</div>
</div>
  <header class="navbar">
    <div class="container">
      <div class="navbar-logo">
        <a href="/">
          <img src="../public/images/global-munch.gif" alt="Global Munch Logo">
        </a>
      </div>
      <div class="mobile-menu-toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav class="navbar-links">
        <a href="../index.html" class="nav-link">Home</a>
        <a href="shop.php" class="nav-link active">Shop</a>
        <a href="reviews.html" class="nav-link">Reviews</a>
        <a href="#" class="nav-link">Stores</a>
        <a href="faq.html" class="nav-link">FAQ</a>
      </nav>
      <div class="navbar-cart">
        <a href="cart.html" class="cart-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="cart-count">0</span>
        </a>
      </div>
    </div>
  </header>

  <section class="shop-hero">
    <div class="containe r">
      <h1 class="font-h2 ">Our Products</h1>
      <p class="font-p">Handcrafted spicy candies made with the finest ingredients</p>
    </div>
  </section>

  <section class="shop-filters">
    <div class="container">
      <div class="filters">
        <div class="filter-group">
          <label>Filter by:</label>
          <select id="category-filter">
            <option value="all">All Products</option>
            <option value="belts">Drinks</option>
            <option value="gummies">Chips and savory</option>
            <option value="tubes">Candy and sweets</option>
            <option value="bites">Cookies, Crackers and Bakery</option>
            <option value="bites">Ramen and instant food</option>
            <option value="bites">Novelties</option>
            <option value="bites">Other</option>
          </select>
        </div>
        <div class="filter-group">
          <label>Sort by:</label>
          <select id="sort-filter">
            <option value="default">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name-az">Name: A-Z</option>
            <option value="name-za">Name: Z-A</option>
          </select>
        </div>
      </div>
    </div>
  </section>

  <section class="product-grid">
    <div class="container">
      <div class="products">

          <div class="product-card" data-category="bites">
            <div class="product-image">
              <img src="../public/images/630e0c0576e726648ab320af_[Chilli Bomba] Sour Strawberry Bites Mockup.jpg" alt="Sour Strawberry Bites">
            </div>
            <div class="product-info">
              <h3 class="font-h6 product-card-title">Sour Strawberry Bites</h3>
              <p class="price">$8.99</p>
              <a href="product.html" class="btn-secondary view-product">View Product</a>
              <button class="btn-primary add-to-cart">Add to Cart</button>
            </div>
          </div>
        <!-- Product 1 -->
        <div class="product-card" data-category="bites">
          <div class="product-image">
            <img src="../public/images/630e0c0576e726648ab320af_[Chilli Bomba] Sour Strawberry Bites Mockup.jpg" alt="Sour Strawberry Bites">
          </div>
          <div class="product-info">
            <h3 class="font-h6 product-card-title">Sour Strawberry Bites</h3>
            <p class="price">$8.99</p>
            <a href="product.html" class="btn-secondary view-product">View Product</a>
            <button class="btn-primary add-to-cart">Add to Cart</button>
          </div>
        </div>

        <!-- Product 2 -->
        <div class="product-card" data-category="belts">
          <div class="product-image">
            <img src="../public/images/630e0d131739663c7afd70e1_[Chilli Bomba] Rainbow Belts Mockup.jpg" alt="Rainbow Belts">
          </div>
          <div class="product-info">
            <h3 class="font-h6 product-card-title">Rainbow Belts</h3>
            <p class="price">$7.99</p>
            <a href="product.html" class="btn-secondary view-product">View Product</a>
            <button class="btn-primary add-to-cart">Add to Cart</button>
          </div>
        </div>

        <!-- Product 3 -->
        <div class="product-card" data-category="gummies">
          <div class="product-image">
            <img src="../public/images/630e0ca45ff73722df01cb13_[Chilli Bomba] Spicy Gushers Mockup.jpg" alt="Spicy Gushers">
          </div>
          <div class="product-info">
            <h3 class="font-h6 product-card-title">Spicy Gushers</h3>
            <p class="price">$9.99</p>
            <a href="product.html" class="btn-secondary view-product">View Product</a>
            <button class="btn-primary add-to-cart">Add to Cart</button>
          </div>
        </div>

        <!-- Product 4 -->
        <div class="product-card" data-category="gummies">
          <div class="product-image">
            <img src="../public/images/630e0d325ff7378d3601d0c8_[Chilli Bomba] Spicy Gummy Worms Mockup.jpg" alt="Spicy Gummy Worms">
          </div>
          <div class="product-info">
            <h3 class="font-h6 product-card-title">Spicy Gummy Worms</h3>
            <p class="price">$8.99</p>
            <a href="product.html" class="btn-secondary view-product">View Product</a>
            <button class="btn-primary add-to-cart">Add to Cart</button>
          </div>
        </div>

        <!-- Product 5 -->
        <div class="product-card" data-category="gummies">
          <div class="product-image">
            <img src="../public/images/630e0e657e1860e204a23059_[Chilli Bomba] Spicy Gummy Bears Mockup.jpg" alt="Spicy Gummy Bears">
          </div>
          <div class="product-info">
            <h3 class="font-h6 product-card-title">Spicy Gummy Bears</h3>
            <p class="price">$8.99</p>
            <a href="product.html" class="btn-secondary view-product">View Product</a>
            <button class="btn-primary add-to-cart">Add to Cart</button>
          </div>
        </div>

        <!-- Product 6 -->
        <div class="product-card" data-category="belts">
          <div class="product-image">
            <img src="../public/images/630e0cc9f1be88df716e6889_[Chilli Bomba] Pineapple Belts Mockup.jpg" alt="Pineapple Belts">
          </div>
          <div class="product-info">
            <h3 class="font-h6 product-card-title">Pineapple Belts</h3>
            <p class="price">$7.99</p>
            <a href="product.html" class="btn-secondary view-product">View Product</a>
            <button class="btn-primary add-to-cart">Add to Cart</button>
          </div>
        </div>

        <!-- Product 7 -->
        <div class="product-card" data-category="belts">
          <div class="product-image">
            <img src="../public/images/630e0ce11739661a15fd6d34_[Chilli Bomba] Strawberry Belts Mockup.jpg" alt="Strawberry Belts">
          </div>
          <div class="product-info">
            <h3 class="font-h6 product-card-title">Strawberry Belts</h3>
            <p class="price">$7.99</p>
            <a href="product.html" class="btn-secondary view-product">View Product</a>
            <button class="btn-primary add-to-cart">Add to Cart</button>
          </div>
        </div>

        <!-- Product 8 -->
        <div class="product-card" data-category="tubes">
          <div class="product-image">
            <img src="../public/images/630e0c31c56e348980633416_[Chilli Bomba] Spicy Strawberry Tubes Mockup.jpg" alt="Spicy Strawberry Tubes">
          </div>
          <div class="product-info">
            <h3 class="font-h6 product-card-title">Spicy Strawberry Tubes</h3>
            <p class="price">$9.99</p>
            <a href="product.html" class="btn-secondary view-product">View Product</a>
            <button class="btn-primary add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- New CTA Section -->
  <section class="cta-section">
    <div class="container">
      <div class="cta-container">
        <div class="cta-content">
          <h2 class="font-h2"> global exotic snacks</h2>
          <p class="font-p">Join our global exotic snack, Spice up your exotic life</p>
          <div class="cta-buttons">
            <a href="#" class="btn-primary">Join Now</a>
            <a href="faq.html" class="btn-secondary">Learn More</a>
          </div>
        </div>
        <div class="cta-image">
          <img src="../public/images/products/gummy-bears.jpg" alt="Spicy Gummy Bears" class="cta-img">
          <div class="cta-badge">
            <span>FREE SHIPPING</span>
            <span class="badge-highlight">on orders over $50</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <img src="../public/images/global-munch.gif" alt="Global Munch Logo">
          <p class="font-p">Bringing the heat to your exotic snacks since 2022</p>
          <div class="social-links">
            <a href="#"><img src="../public/images/facebook-icon.svg" alt="Facebook"></a>
            <a href="#"><img src="../public/images/instagram-icon.svg" alt="Instagram"></a>
            <a href="#"><img src="../public/images/twitter-icon.svg" alt="Twitter"></a>
          </div>
        </div>
        <div class="footer-links">
          <h3 class="font-h5">Shop</h3>
          <ul>
            <li><a href="shop.php">All Products</a></li>
            <li><a href="shop.php">Gummy Bears</a></li>
            <li><a href="shop.php">Belts</a></li>
            <li><a href="shop.php">Variety Packs</a></li>
          </ul>
        </div>
        <div class="footer-links">
          <h3 class="font-h5">Info</h3>
          <ul>
            <li><a href="about.html">About Us</a></li>
            <li><a href="faq.html">FAQs</a></li>
            <li><a href="shipping.html">Shipping</a></li>
            <li><a href="returns.html">Returns</a></li>
          </ul>
        </div>
        <div class="footer-newsletter">
          <h3 class="font-h5">Newsletter</h3>
          <p class="font-p">Subscribe for updates and special offers.</p>
          <form>
            <input type="email" placeholder="Your email" required>
            <button type="submit" class="btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="font-p5 footer-copyright">© 2023 Global Munch. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <script>
    document.addEventListener('DOMContentLoaded', function() {
      // Product filtering functionality
      const categoryFilter = document.getElementById('category-filter');
      const sortFilter = document.getElementById('sort-filter');
      const products = document.querySelectorAll('.product-card');

      categoryFilter.addEventListener('change', filterProducts);
      sortFilter.addEventListener('change', sortProducts);

      function filterProducts() {
        const category = categoryFilter.value;
        
        products.forEach(product => {
          if (category === 'all' || product.dataset.category === category) {
            product.style.display = 'block';
          } else {
            product.style.display = 'none';
          }
        });
      }

      function sortProducts() {
        const sortValue = sortFilter.value;
        const productsArray = Array.from(products);
        
        productsArray.sort((a, b) => {
          const priceA = parseFloat(a.querySelector('.price').textContent.replace('$', ''));
          const priceB = parseFloat(b.querySelector('.price').textContent.replace('$', ''));
          const nameA = a.querySelector('h3').textContent;
          const nameB = b.querySelector('h3').textContent;
          
          if (sortValue === 'price-low') {
            return priceA - priceB;
          } else if (sortValue === 'price-high') {
            return priceB - priceA;
          } else if (sortValue === 'name-az') {
            return nameA.localeCompare(nameB);
          } else if (sortValue === 'name-za') {
            return nameB.localeCompare(nameA);
          }
          
          return 0;
        });
        
        const productContainer = document.querySelector('.products');
        productsArray.forEach(product => {
          productContainer.appendChild(product);
        });
      }

      // Mobile menu functionality
      const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
      const navbarLinks = document.querySelector('.navbar-links');
      
      mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navbarLinks.classList.toggle('active');
        document.body.classList.toggle('menu-open');
      });

      // Close mobile menu when clicking on a link
      const navLinks = document.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileMenuToggle.classList.remove('active');
          navbarLinks.classList.remove('active');
          document.body.classList.remove('menu-open');
        });
      });
    });
  </script>
  
  <!-- Mobile Navbar (Only shows on small screens) -->
  <nav class="mobile-navbar">
    <div class="container">
      <a href="/" class="mobile-nav-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        Home
      </a>
      <a href="shop.php" class="mobile-nav-item active">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
        Shop
      </a>
      <a href="cart.html" class="mobile-nav-item">
        <div class="icon-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <span class="mobile-cart-count">0</span>
        </div>
        Cart
      </a>
      <a href="faq.html" class="mobile-nav-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
        FAQ
      </a>
      <a href="#" class="mobile-nav-item menu-toggle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
        Menu
      </a>
    </div>
  </nav>
  
  <!-- Include cart.js -->
  <script src="../public/js/cart.js"></script>
</body>
</html> 