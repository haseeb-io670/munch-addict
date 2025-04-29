<?php
require __DIR__ . '/../../vendor/autoload.php';
use GlobalMunch\WooCommerce\Products\GetProducts;

$productsApi = new GetProducts();

$products = $productsApi->getAllProducts();

foreach($products as $p) {
    echo '<pre>';
    print_r($p);
    echo '</pre>';
}
exit;