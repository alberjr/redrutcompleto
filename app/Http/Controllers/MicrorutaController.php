<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Microruta;
class MicrorutaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //echo $request;
        //return response()->json($request->json()->get('microrutaid'));
        $microruta = Microruta::orderBy("microrutas.id")->get();
        return response()->json($microruta);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getmicroruta(Request $request)
    {
        $microruta = Microruta::find($request->json()->get('microrutaid'));
        return response()->json($microruta);
    }
    protected function createMicroruta(Request $request)
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

       $microruta=Microruta::create([
            'microruta_ruta_id' => $request->json()->get('microruta_ruta_id'),
            'microruta_direccion' => $request->json()->get('microruta_direccion'),
            'microruta_latitud' => $request->json()->get('microruta_latitud'),
            'microruta_longitud' => $request->json()->get('microruta_longitud'),
            'microruta_user_creador' => $request->json()->get('microruta_user_creador'),

        ]);

       

        return response()->json(compact('microruta'),201);

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
        $microruta = microruta::find($request->id);
        $microruta->microruta_ruta_id= $request->microruta['microruta_ruta_id'];
        $microruta->microruta_direccion= $request->microruta['microruta_direccion'];
        $microruta->microruta_latitud= $request->microruta['microruta_latitud'];          
        $microruta->microruta_longitud= $request->microruta['microruta_longitud'];
        $microruta->microruta_user_creador= $request->microruta['microruta_user_creador'];
        $microruta->save();


        return response()->json('Microruta Updated Successfully.');
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
      $microruta = Microruta::find($request->json()->get('microrutaid'));
      $microruta->microruta_estado=0;
      $microruta->save();

      return response()->json('Micro Ruta Inactivado.');
    }
}
