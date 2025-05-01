document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById("loader-navbar-categories");
    loader.classList.remove("hidden");
  
    $.ajax({
        url: "api/category/get.php",
        method: "GET",
        // dataType: "json",
        success: function (response) {
            console.log("Categories loaded from API.");
            let categories;
            try {
                categories = typeof response === "string" ? JSON.parse(response) : response;
            } catch (e) {
                console.error("Failed to parse response as JSON:", e);
                loader.textContent = "Failed to load categories.";
                return;
            }

            if (!Array.isArray(categories)) {
                console.error("Expected an array of categories.");
                loader.textContent = "Invalid category data.";
                return;
            }

            if(categories && categories.length > 0) {
                categories.forEach((category) => {
                    console.log(category);
                    const categoryItem = document.createElement("a");
                    categoryItem.classList.add("mobile-menu-category");

                    // Image
                    if (category.images && category.images.length > 0) {
                        const categoryImage = document.createElement("img");
                        categoryImage.setAttribute("src", category.images[0].src || "");
                        categoryImage.setAttribute(
                            "alt",
                            category.images[0].alt || category.images[0].name || "Category Image"
                        );
                        categoryImage.style.width = "50px";
                        categoryImage.style.height = "50px";
                        categoryItem.appendChild(categoryImage);
                    }

                    categoryItem.textContent = category.name;

                    const container = document.getElementById("mobile-menu-container");
                    if (container) {
                        container.appendChild(categoryItem);
                    }
                });

                loader.classList.add("hidden");
            } else {
                loader.textContent = "No categories to show :)";
            }
        },
        error: function (xhr, status, error) {
        console.error("Failed to fetch categories:", error);
        }
    });
});