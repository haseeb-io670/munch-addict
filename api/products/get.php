<?php
require __DIR__ . '/../../vendor/autoload.php';
use GlobalMunch\WooCommerce\Products\GetProducts;

$productsApi = new GetProducts();

$products = $productsApi->getAllProducts();

echo json_encode($products, true);
