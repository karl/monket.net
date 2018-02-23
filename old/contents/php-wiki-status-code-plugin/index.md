---
title: PHP Wiki Status Code Plugin
author: karl
template: article.jade
---

## Description

A plugin to give a wiki page an alternate http return code.

e.g. 404 Not Found - when a wiki page has no revisions.

## Download

* [StatusCode.php](StatusCode.php)

## Example

Placed in a normal wiki page:

```php
<?plugin StatusCode code="404" ?>
```

this will cause the page to be returned as 404 Not Found.

## Parameters

<dl>

<dt>code</dt>

<dd>The http return code to use.</dd>

</dl>

<dl>

<dt>text</dt>

<dd>The text to return with the code. If this is not present a look up table is used to find the correct text for that error code.</dd>

</dl>

## Code

```php
<?php

class WikiPlugin_StatusCode extends WikiPlugin {

    function getName () {
        return _("StatusCode");
    }

    function getDescription () {
        return _("Return the Page with an alternate status code (e.g. 404 for page not found)");

    }

    function getDefaultArguments() {
        return array('code' => 200,
                     'text' => null);
    }

    function run($dbi, $argstr, $request) {
        extract($this->getArgs($argstr, $request));

        // Return Codes copied from:
        // http://www.cknow.com/ckinfo/def_h/httpreturncodes.shtml
        $HttpReturnCodes = array(
            100 => 'Continue',
            101 => 'Switching Protocols',

            200 => 'OK',
            201 => 'Created',
            202 => 'Accepted',
            203 => 'Non-Authoritative Information',
            204 => 'No New Content',
            205 => 'Reset Content',
            206 => 'Partial Content',

            300 => 'Multiple Choice',
            301 => 'Moved Permanently',
            302 => 'Moved Temporarily',
            303 => 'See Other',
            304 => 'Not Modified',
            305 => 'Use Proxy',

            400 => 'Bad Request',
            401 => 'Unauthorized',
            402 => 'Payment Required',
            403 => 'Forbidden',
            404 => 'Not Found',
            405 => 'Method Not Allowed',
            406 => 'Not Acceptable',
            407 => 'Proxy Authentication Required',
            408 => 'Request Timeout',
            409 => 'Conflict',
            410 => 'Gone',
            411 => 'Length Required',
            412 => 'Precondition Failed',
            413 => 'Request Entity Too Large',
            414 => 'Request-URI Too Long',
            415 => 'Unsupported Media Type',

            500 => 'Internal Server Error',
            501 => 'Not Implemented',
            502 => 'Bad Gateway',
            503 => 'Service Unavailable',
            504 => 'Gateway Timeout',
            505 => 'HTTP Version Not Supported'
        );

        settype( $code, 'integer' );

        if ( $text == null ) {
            $text = $HttpReturnCodes[ $code ];
        }

        $text = str_replace( "\n", '', $text );

        header( $_SERVER['SERVER_PROTOCOL'] . ' ' . $code . ' ' . $text);
    }
}

?>
```
