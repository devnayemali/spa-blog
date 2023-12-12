<?php

namespace App\Enums;

class StatusType
{
    const ACTIVE = 'Active';
    const INACTIVE = 'Inactive';
    const PENDING = 'Pending';

    public static function getConstants()
    {
        $reflectionClass = new \ReflectionClass(static::class);
        return $reflectionClass->getConstants();
    }
}