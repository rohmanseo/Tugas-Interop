<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'API\AuthController@login')->name('login');
    Route::post('register', 'API\AuthController@register')->name('register');
    Route::post('logout', 'API\AuthController@logout')->name('logout');
    Route::post('refresh', 'API\AuthController@refresh')->name('refresh');
    Route::post('me', 'API\AuthController@me')->name('profile');

});

Route::group([

    'middleware' => 'api',

], function ($router) {

    Route::resource('note', 'API\NoteController',['except' => ['edit','create']]);

});