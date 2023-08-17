<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\ChartController;
use App\Http\Controllers\Admin\ClientReviewController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\ProjectController;
use App\Http\Controllers\Admin\FooterController;
use App\Http\Controllers\Admin\InformationController;
use App\Http\Controllers\Admin\ServiceController;
use App\Http\Controllers\Admin\HomeEtcController;



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

//Footer Route
Route::get('/footerview', [FooterController::class,'footerAll']);

//Information Route
Route::get('/informationdata', [InformationController::class,'onAllSelect']);

//Service Route
Route::get('/service', [ServiceController::class,'onAllSelect']);

//Home Etc Route
Route::get('/home/video', [HomeEtcController::class,'HomeVideo']);
Route::get('/totalhome', [HomeEtcController::class,'TotalHome']);
Route::get('/techhome', [HomeEtcController::class,'SelectTecHome']);
Route::get('/home/title', [HomeEtcController::class,'SelectHomeTitle']);