<?php
namespace GlobalMunch\WooCommerce\Products;

// require __DIR__ . '/../../vendor/autoload.php';
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
}
