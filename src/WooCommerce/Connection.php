<?php
namespace GlobalMunch\WooCommerce;

// require __DIR__ . '/../../vendor/autoload.php';
use Automattic\WooCommerce\Client;
use GlobalMunch\WooCommerce\Connection\Config;

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
                Config::getConfig()['url'],
                Config::getConfig()['consumer_key'],
                Config::getConfig()['consumer_secret'],
                Config::getConfig()['options']
            );
        } catch (\Exception $e) {
            return null;
        }
        return $woocommerce;
    }
}