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


/* Usuario */
Route::post('register','UserController@register');
Route::post('login','UserController@login');
Route::get('profile','UserController@getAuthenticatedUser');
Route::post('listusers','UserCrudController@index');
Route::post('getuser','UserCrudController@getuser');
Route::post('updateuser','UserCrudController@update');
Route::post('destroyuser','UserCrudController@destroy');
/* Tipos Documentos */
Route::post('listtipodocumentos','TipoDocumentoController@index');
/* Empresa */
Route::post('listempresas','EmpresaController@index');
/* Macroruta */
Route::post('indexmacroruta','MacrorutaController@index');
Route::post('createmacroruta','MacrorutaController@createMacroruta');
Route::post('getmacroruta','MacrorutaController@getmacroruta');
Route::post('updatemacroruta','MacrorutaController@update');
Route::post('destroymacroruta','MacrorutaController@destroy');
/* Microruta */
Route::post('indexmicroruta','MicrorutaController@index');
Route::post('createmicroruta','MicrorutaController@createMicroruta');
Route::post('getmicroruta','MicrorutaController@getmicroruta');
Route::post('updatemicroruta','MicrorutaController@update');
Route::post('destroymicroruta','MicrorutaController@destroy');
/* Ruta */
Route::post('indexruta','RutaController@index');
Route::post('createruta','RutaController@createruta');
Route::post('getruta','RutaController@getruta');
Route::post('updateruta','RutaController@update');
Route::post('destroyruta','RutaController@destroy');
/* Ruta Macroruta */
Route::post('getrutamacrorutas','Rutas_macrorutaController@getrutamacrorutas');
Route::post('destroyrutamacrorutas','Rutas_macrorutaController@destroy');
/* Reporte */
Route::post('indexreporte','ReporteController@index');
Route::post('createreporte','ReporteController@createreporte');
Route::post('getreporte','ReporteController@getreporte');
Route::post('updatereporte','ReporteController@update');
Route::post('destroyreporte','ReporteController@destroy');
/* Material */
Route::post('indexmaterial','MaterialController@index');
Route::post('creatematerial','MaterialController@creatematerial');
Route::post('getmaterial','MaterialController@edit');
Route::post('updatematerial','MaterialController@update');
Route::post('destroymaterial','MaterialController@destroy');
/* Compras*/
Route::post('indexcompra','ComprasxrutaController@index');
Route::post('createcompra','ComprasxrutaController@creatematerial');
Route::post('destroycompra','ComprasxrutaController@destroy');

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/
