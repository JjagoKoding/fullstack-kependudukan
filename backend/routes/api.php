<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\KecamatanController;
use App\Http\Controllers\KotaKabupatenController;
use App\Http\Controllers\ProvinsiController;

Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/profile', [AuthController::class, 'profile']);
    Route::post('/logout', [AuthController::class, 'logout']);
});
Route::get('/avatar/{id}', [AuthController::class, 'avatar']);

Route::resource('provinsi', ProvinsiController::class);
Route::resource('kota-kabupaten', KotaKabupatenController::class);
Route::resource('kecamatan', KecamatanController::class);
