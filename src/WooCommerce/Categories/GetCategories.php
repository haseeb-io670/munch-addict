<?php
namespace GlobalMunch\WooCommerce\Categories;

// require __DIR__ . '/../../vendor/autoload.php';
use GlobalMunch\WooCommerce\Connection;
use Automattic\WooCommerce\Client;

class GetCategories {
    public $woocommerce = null;
    public $categories = [];
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

    public function getAllCategories()
    {
        try {
            if($this->woocommerce) {
                $this->categories = $this->woocommerce->get('products/categories');
            } else {
                return 'No connection could be made to woocommerce site.';
            }
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
        return $this->categories;
    }
}
