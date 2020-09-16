<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Rutas_macroruta;
class Rutas_macrorutaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getrutamacrorutas(Request $request)
    {
        $rutas_macroruta = Rutas_macroruta::select(array('rutas_macrorutas.id,rutas_macroruta_ruta_id,ruta_name,rutas_macroruta_macroruta_id,macroruta_name,rutas_macroruta_user_creador'))
        ->Where('rutas_macroruta_ruta_id','=',$request->json()->get('rutaid'))
        ->join('rutas','rutas.id','=','rutas_macroruta_ruta_id')
        ->join('macrorutas','macrorutas.id','=','rutas_macroruta_macroruta_id')
        ->orderBy("rutas_macrorutas.id")
        ->get();
        return response()->json($rutas_macroruta);
    }
    


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
      $rutas_macroruta = Rutas_macroruta::destroy($request->json()->get('Rutas_macrorutaid'));

      return response()->json('Macroruta Eliminada.');
    }
}
