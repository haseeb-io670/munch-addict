document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById("loader-featured-products");
    loader.classList.remove("hidden");
  
    $.ajax({
        url: "api/products/get.php",
        method: "GET",
        // dataType: "json",
        success: function (response) {
            console.log("Products loaded from API.");
            let products;
            try {
                products = typeof response === "string" ? JSON.parse(response) : response;
            } catch (e) {
                console.error("Failed to parse response as JSON:", e);
                loader.textContent = "Failed to load products.";
                return;
            }

            if (!Array.isArray(products)) {
                console.error("Expected an array of products.");
                loader.textContent = "Invalid product data.";
                return;
            }

            if(products) {
                products.forEach((product) => {
                    const productCard = document.createElement("div");
                    productCard.classList.add("product-card");

                    // Image
                    if (product.images && product.images.length > 0) {
                        const productImage = document.createElement("img");
                        productImage.setAttribute("src", product.images[0].src || "");
                        productImage.setAttribute(
                            "alt",
                            product.images[0].alt || product.images[0].name || "Product Image"
                        );
                        productImage.style.width = "100%";
                        productImage.style.height = "200px";
                        productImage.style.objectFit = "cover";
                        productImage.style.borderRadius = "8px";
                        productCard.appendChild(productImage);
                    }

                    const productTitle = document.createElement("h3");
                    productTitle.classList.add("font-h6", "product-card-title");
                    productTitle.textContent = product.name || "No Title";
                    productCard.appendChild(productTitle);

                    // Price
                    const productPrice = document.createElement("p");
                    productPrice.classList.add("price");
                    productPrice.textContent = `$${parseFloat(product.price).toFixed(2)}`;
                    productCard.appendChild(productPrice);

                    // Button
                    const addToCartBtn = document.createElement("button");
                    addToCartBtn.classList.add("btn-secondary", "add-to-cart");
                    addToCartBtn.textContent = "Add to Cart";
                    productCard.appendChild(addToCartBtn);

                    const container = document.getElementById("product-container");
                    if (container) {
                    container.appendChild(productCard);
                    }
                });

                loader.classList.add("hidden");
            } else {
                loader.textContent = "No products to show :)";
            }
        },
        error: function (xhr, status, error) {
        console.error("Failed to fetch products:", error);
        }
    });
});