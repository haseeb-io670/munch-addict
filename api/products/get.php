<?php
require __DIR__ . '/../../vendor/autoload.php';
use GlobalMunch\WooCommerce\API\Products\GetProducts;

$productsApi = new GetProducts();

// Get category from request
$category = isset($_GET['category']) ? $_GET['category'] : null;

// If category is provided, get products by category, otherwise get all products
if ($category && $category !== 'all') {
    $products = $productsApi->getProductsByCategory($category);
} else {
    $products = $productsApi->getAllProducts();
}

echo json_encode($products, true);
