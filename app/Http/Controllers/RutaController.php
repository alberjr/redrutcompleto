<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Ruta;
class RutaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $ruta = Ruta::where('rutas.ruta_user_creador','=',$request->json()->get('userid'))        
        ->orderBy("ruta_name")->get();
        return response()->json($ruta);
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getruta(Request $request)
    {
        $ruta = Ruta::find($request->json()->get('rutaid'));
        return response()->json($ruta);
    }
    protected function createruta(Request $request)
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

       $ruta=Ruta::create([
            'ruta_name' => $request->json()->get('ruta_name'),
            'ruta_lunes_ind' => $request->json()->get('ruta_lunes_ind'),
            'ruta_martes_ind' => $request->json()->get('ruta_martes_ind'),
            'ruta_miercoles_ind' => $request->json()->get('ruta_miercoles_ind'),
            'ruta_jueves_ind' => $request->json()->get('ruta_jueves_ind'),
            'ruta_viernes_ind' => $request->json()->get('ruta_viernes_ind'),
            'ruta_sabado_ind' => $request->json()->get('ruta_sabado_ind'),
            'ruta_domingo_ind' => $request->json()->get('ruta_domingo_ind'),
            'ruta_empresa_id' => $request->json()->get('ruta_empresa_id'),
            'ruta_mapa' => $request->json()->get('ruta_mapa'),
            'ruta_pais' => $request->json()->get('ruta_pais'),
            'ruta_ciudad' => $request->json()->get('ruta_ciudad'),
            'ruta_user_creador' => $request->json()->get('ruta_user_creador'),
            'ruta_estado' => $request->json()->get('ruta_estado'),

        ]);

       

        return response()->json(compact('ruta'),201);

    }

    


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    { 
        $ruta = Ruta::find($request->id);
        $ruta->ruta_name= $request->ruta['ruta_name'];
        $ruta->ruta_lunes_ind= $request->ruta['ruta_lunes_ind'];
        $ruta->ruta_martes_ind= $request->ruta['ruta_martes_ind'];
        $ruta->ruta_miercoles_ind= $request->ruta['ruta_miercoles_ind'];
        $ruta->ruta_jueves_ind= $request->ruta['ruta_jueves_ind'];
        $ruta->ruta_viernes_ind= $request->ruta['ruta_viernes_ind'];
        $ruta->ruta_sabado_ind= $request->ruta['ruta_sabado_ind'];
        $ruta->ruta_domingo_ind= $request->ruta['ruta_domingo_ind'];
        $ruta->ruta_empresa_id= $request->ruta['ruta_empresa_id'];
        $ruta->ruta_mapa= $request->ruta['ruta_mapa'];
        $ruta->ruta_pais= $request->ruta['ruta_pais'];
        $ruta->ruta_ciudad= $request->ruta['ruta_ciudad'];
        $ruta->ruta_user_creador= $request->ruta['ruta_user_creador'];
        $ruta->ruta_estado= $request->ruta['ruta_estado'];
        $ruta->save();


        return response()->json('Ruta Updated Successfully.');
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
      $ruta = Ruta::find($request->json()->get('rutaid'));
      $ruta->ruta_estado=0;
      $ruta->save();

      return response()->json('Ruta Inactivado.');
    }
}
