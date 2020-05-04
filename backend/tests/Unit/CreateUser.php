<?php
namespace Tests\Unit;
use App\User;

class CreateUser{
    
    public static $user = null;

    public static function getUser(){

        if(self::$user==null){
            self::$user = factory(User::class)->create();
        }
        
        return self::$user;

    }

}



