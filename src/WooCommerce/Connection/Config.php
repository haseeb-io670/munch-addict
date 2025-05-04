<?php

namespace GlobalMunch\WooCommerce\Connection;

class Config {
    public static $config = [
        'url' => 'http://127.0.0.1:8000',
        'consumer_key' => 'ck_004ca8cec058487737eae63a02531e65da62ea68',
        'consumer_secret' => 'cs_c97535904e730dc130884420b02234ea2e815487',
        'options' => [
            'version' => 'wc/v3',
        ]
    ];
    
    public static function getConfig()
    {
        try {
            return [
                'url' => static::$config['url'],
                'consumer_key' => static::$config['consumer_key'],
                'consumer_secret' => static::$config['consumer_secret'],
                'options' => static::$config['options']
            ];
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }
}