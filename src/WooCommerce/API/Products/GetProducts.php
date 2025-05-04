<?php
namespace GlobalMunch\WooCommerce\API\Products;

use GlobalMunch\WooCommerce\Connection;
use Automattic\WooCommerce\Client;

class GetProducts {
    public $woocommerce = null;
    public $products = [];
    public function __construct()
    {
        $connection = new Connection();
        $this->woocommerce = $connection->getConnection();
        unset($connection);
    }

    // public static function connect()
    // {
    //     return self::$connection->connect();
    // }

    public function getAllProducts()
    {
        try {
            if($this->woocommerce) {
                $this->products = $this->woocommerce->get('products');
            } else {
                return 'No connection could be made to woocommerce site.';
            }
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
        return $this->products;
    }

    public function getProductsByCategory($category)
    {
        try {
            if($this->woocommerce) {
                $this->products = $this->woocommerce->get('products', ['category' => $category]);
            } else {
                return 'No connection could be made to woocommerce site.';
            }
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
        return $this->products;
    }
}
