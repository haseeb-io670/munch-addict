<?php
require __DIR__ . '/../../vendor/autoload.php';
use GlobalMunch\WooCommerce\API\Categories\GetCategories;

$categoriesApi = new GetCategories();

$categories = $categoriesApi->getAllCategories();

echo json_encode($categories, true);
