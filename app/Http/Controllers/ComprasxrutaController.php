<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Comprasxruta;

use DB;
class ComprasxrutaController extends Controller
{
    
  /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //echo $request;
        //return response()->json($request->json()->get('userid'));
        $comprasxrutas =  DB::table('comprasxrutas')
        ->select(array('comprasxrutas.compraxruta_idreporte','comprasxrutas.compraxruta_idmaterial','materials.material_name','comprasxrutas.compraxruta_valor','comprasxrutas.compraxruta_peso','comprasxrutas.created_at','comprasxrutas.updated_at'))
        
        ->join('materials', 'comprasxrutas.compraxruta_idmaterial', '=', 'materials.id')
        ->where('compraxruta_idreporte','=',$request->json()->get('reporteid'))
        ->orderBy("materials.material_name")
        ->get();
        return response()->json($comprasxrutas);
    }

  

    protected function creatematerial(Request $request)
    {
        
      /*  $validator= Validator::make($request->json()->all(), [
            'name' => 'required|string|max:191',
            'user_tipo' => 'required|string|max:2',
            'email' => 'required|string|email|max:191|unique:users',
            'password' => 'required|string|min:6',
            'user_imei' => 'string|max:191',
            'user_tdocumento' => 'required|string|max:2',
            'user_documento' => 'required|string|max:191',
            'user_fecha_nacimiento' => 'required|string|max:20',
            'user_empresa_id'=> 'required|integer|min:0',
            'user_pais'=> 'required|string|max:191',
            'user_ciudad'=> 'required|string|max:191',
            'user_estado' => 'required|string|max:1',
            'user_user_creador' => 'required|integer|min:0',
        ]);

         if($validator->fails()){
         return response()->json($validator->errors()->toJson(),400);}*/

       $comprasxruta=Comprasxruta::create([
            'compraxruta_idreporte' => $request->json()->get('compraxruta_idreporte'),
            'compraxruta_idmaterial' => $request->json()->get('compraxruta_idmaterial'),
            'compraxruta_valor' => $request->json()->get('compraxruta_valor'),
            'compraxruta_peso' => $request->json()->get('compraxruta_peso'),
        ]);

       

        return response()->json(compact('comprasxruta'),201);

    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
      
      DB::table('comprasxrutas')->where('compraxruta_idreporte','=',$request->json()->get('compraxruta_idreporte'))
      ->where('compraxruta_idmaterial','=',$request->json()->get('compraxruta_idmaterial'))
      ->delete();
      //$materialvar->delete();
      return response()->json('Registro Eliminado.');
      

      
    }
}
