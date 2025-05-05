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
                
                console.log(products);
                if (Array.isArray(products) && products.length > 0) {
                    // Clear existing products
                    productContainer.innerHTML = '';
                    
                    // Generate HTML for each product
                    products.forEach(product => {
                        const productCard = document.createElement('div');
                        productCard.className = 'product-card';
                        productCard.setAttribute('data-category', product.category || 'all');
                        
                        productCard.innerHTML = `
                            <div class="product-image">
                                <img src="${product.images[0].src || ''}" alt="${product.name || ''}">
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
                    showError('No products found for category.');
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
        productContainer.style.display = 'block';
        productContainer.innerHTML = `<center><p class="error-message">${message}</p></center>`;
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

// Function to load products via AJAX
function loadCategories() {
    const loader = document.getElementById('loader-category');
    const categoryContainer = document.getElementById('category-filter');
    
    // Show loader
    loader.style.display = 'block';
    categoryContainer.style.display = 'none';

    // Prepare the AJAX request
    $.ajax({
        url: '../../api/category/get.php',
        method: 'GET',
        // data: category ? { category: category } : {},
        success: function(response) {
            try {
                const categories = typeof response === 'string' ? JSON.parse(response) : response;
                
                if (Array.isArray(categories)) {
                    // Clear existing categories
                    // categoryContainer.innerHTML = '';
                    
                    // Generate HTML for each product
                    categories.forEach(category => {
                        const categoryItem = document.createElement('option');
                        categoryItem.setAttribute('value', category.id);

                        if(category.slug == 'uncategorized') {
                            categoryItem.textContent = 'Other';
                        } else {
                            categoryItem.textContent = `${category.name}`;
                        }
                        
                        categoryContainer.appendChild(categoryItem);
                    });
                    
                    // Hide loader and show categories
                    loader.style.display = 'none';
                    categoryContainer.style.display = 'block';
                    
                } else {
                    throw new Error('Invalid categories data format');
                }
            } catch (error) {
                console.error('Error processing categories:', error);
                showError('Error loading categories. Please try again.');
            }
        },
        error: function(xhr, status, error) {
            console.error('AJAX Error:', error);
            showError('Error loading categories. Please try again.');
        }
    });

    function showError(message) {
        loader.style.display = 'none';
        categoryContainer.style.display = 'grid';
        categoryContainer.innerHTML = `<p class="error-message">${message}</p>`;
    }
}

// Initialize when document is ready
document.addEventListener('DOMContentLoaded', function() {
    // Initial load of all products
    loadCategories();
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