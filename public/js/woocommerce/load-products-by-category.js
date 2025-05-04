// Function to load products via AJAX
function loadProducts(category = null) {
    const loader = document.getElementById('loader-featured-products');
    const productContainer = document.getElementById('product-container');
    
    // Show loader
    loader.style.display = 'block';
    productContainer.style.display = 'none';

    // Prepare the AJAX request
    $.ajax({
        url: '../../api/products/get.php',
        method: 'GET',
        data: category ? { category: category } : {},
        success: function(response) {
            try {
                const products = typeof response === 'string' ? JSON.parse(response) : response;
                
                if (Array.isArray(products)) {
                    // Clear existing products
                    productContainer.innerHTML = '';
                    
                    // Generate HTML for each product
                    products.forEach(product => {
                        const productCard = document.createElement('div');
                        productCard.className = 'product-card';
                        productCard.setAttribute('data-category', product.category || 'all');
                        
                        productCard.innerHTML = `
                            <div class="product-image">
                                <img src="${product.image_url || ''}" alt="${product.name || ''}">
                            </div>
                            <div class="product-info">
                                <h3 class="font-h6 product-card-title">${product.name || ''}</h3>
                                <p class="price">$${parseFloat(product.price || 0).toFixed(2)}</p>
                                <a href="product.html?id=${product.id || ''}" class="btn-secondary view-product">View Product</a>
                                <button class="btn-primary add-to-cart" data-product-id="${product.id || ''}">Add to Cart</button>
                            </div>
                        `;
                        
                        productContainer.appendChild(productCard);
                    });
                    
                    // Hide loader and show products
                    loader.style.display = 'none';
                    productContainer.style.display = 'grid';
                    
                    // Initialize event listeners for new products
                    initializeProductEventListeners();
                } else {
                    throw new Error('Invalid product data format');
                }
            } catch (error) {
                console.error('Error processing products:', error);
                showError('Error loading products. Please try again.');
            }
        },
        error: function(xhr, status, error) {
            console.error('AJAX Error:', error);
            showError('Error loading products. Please try again.');
        }
    });

    function showError(message) {
        loader.style.display = 'none';
        productContainer.style.display = 'grid';
        productContainer.innerHTML = `<p class="error-message">${message}</p>`;
    }
}

// Function to initialize event listeners for products
function initializeProductEventListeners() {
    // Add to cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            // Add your cart functionality here
            console.log('Adding product to cart:', productId);
        });
    });
}

// Initialize when document is ready
document.addEventListener('DOMContentLoaded', function() {
    // Initial load of all products
    loadProducts();
    
    // Category filter change handler
    const categoryFilter = document.getElementById('category-filter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', function() {
            const category = this.value;
            loadProducts(category);
        });
    }
});