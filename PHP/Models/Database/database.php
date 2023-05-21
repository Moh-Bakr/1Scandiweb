<?php

class database
{
    public static function GetConnection()
    {
        $config_file = __DIR__ . '/../../config/connection.json';
        $config = json_decode(file_get_contents($config_file), true);

        $host = $config['host'];
        $database_name = $config['database_name'];
        $username = $config['username'];
        $password = $config['password'];

        $conn = null;
        try {
            $conn = new \PDO("mysql:host=" . $host . ";dbname=" . $database_name, $username, $password);
            $conn->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
        } catch (\PDOException $exception) {
            echo "Database could not be connected: " . $exception->getMessage();
        }
        return $conn;
    }
}