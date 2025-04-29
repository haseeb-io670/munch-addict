<?php
require __DIR__ . '/../../vendor/autoload.php';
use GlobalMunch\WooCommerce\Products\GetProducts;

$productsApi = new GetProducts();

$products = $productsApi->getAllProducts();

echo '<pre>';
print_r($products);
echo '</pre>';
exit;