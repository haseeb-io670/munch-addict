<?php
namespace GlobalMunch\WooCommerce;

// require __DIR__ . '/../../vendor/autoload.php';
use Automattic\WooCommerce\Client;

class Connection {
    public static $woocommerce = null;
    public function __construct()
    {
        self::$woocommerce = self::connect();
    }

    public function getConnection()
    {
        return self::$woocommerce;
    }
    private static function connect()
    {
        try {
            $woocommerce = new Client(
                'http://127.0.0.1:8000',
                'ck_004ca8cec058487737eae63a02531e65da62ea68',
                'cs_c97535904e730dc130884420b02234ea2e815487',
                [
                    'version' => 'wc/v3',
                ]
            );
        } catch (\Exception $e) {
            return null;
        }
        return $woocommerce;
    }
}