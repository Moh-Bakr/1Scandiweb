<?php

class Route
{
    public static $routes = [];

    public static function resource($uri, $action)
    {
        self::$routes[] = $uri;
        if ($_SERVER['REQUEST_URI'] == $uri) {
            $action->__invoke();
        }
    }
}