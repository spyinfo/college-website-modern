<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// API routes
Route::prefix('api')->group(function () {

    Route::get('csrf', 'ApiController@csrf');

    Route::get('leaders', 'ApiController@leaders');
    Route::post('request', 'ApiController@request');

});
