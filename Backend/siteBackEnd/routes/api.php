<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\ChartController;
use App\Http\Controllers\Admin\ClientReviewController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\ProjectController;



/*Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});*/
//chart route
Route::get('/chartdata', [ChartController::class,'onAllSelect']);
//client review route
Route::get('/clientreview', [ClientReviewController::class,'reviewAll']);
//contact form route
Route::post('/contactsent', [ContactController::class,'sendContact']);
//Project Router
Route::get('/projectview', [ProjectController::class,'Projectview']);
Route::get('/projectselview', [ProjectController::class,'ProjectviewOne']);
Route::get('/projectdetails', [ProjectController::class,'onSelectProject']);
