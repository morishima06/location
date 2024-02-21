<?php

use App\Http\Controllers\admin\ProfileController;
use App\Http\Controllers\admin\ShopInfoController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\FrontController;

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

Route::get('/', [FrontController::class, 'home'])->name('home');
Route::get('/search', [FrontController::class, 'search'])->name('search');
Route::get('/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/shopInfo/show', [ShopInfoController::class, 'show'])->name('ShopInfo.show');
    Route::get('/shopInfo/create', [ShopInfoController::class, 'create'])->name('ShopInfo.create');
    Route::post('/shopInfo/create_check', [ShopInfoController::class, 'create_check'])->name('ShopInfo.create_check');
    // Route::post('/shopInfo/getAreaCode', [ShopInfoController::class, 'getAreaCode'])->name('ShopInfo.getAreaCode');
    Route::get('/shopInfo/getAreaCode', [ShopInfoController::class, 'getAreaCode'])->name('ShopInfo.getAreaCode');
    Route::post('/shopInfo/getAreaCode', [ShopInfoController::class, 'getAreaCode'])->name('ShopInfo.getAreaCode');
    Route::post('/shopInfo/edit_check', [ShopInfoController::class, 'edit_check'])->name('ShopInfo.edit_check');
    Route::get('/shopInfo/edit/{id}', [ShopInfoController::class, 'edit'])->name('ShopInfo.edit');
    Route::post('/shopInfo/addArea', [ShopInfoController::class, 'addArea'])->name('ShopInfo.addArea');
    Route::get('/shopInfo/getBrand', [ShopInfoController::class, 'getBrand'])->name('ShopInfo.getBrand');
    Route::post('/shopInfo/addBrand', [ShopInfoController::class, 'addBrand'])->name('ShopInfo.addBrand');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
