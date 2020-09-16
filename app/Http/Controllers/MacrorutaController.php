<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Macroruta;
class MacrorutaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //echo $request;
        //return response()->json($request->json()->get('macrorutaid'));
        $macroruta = Macroruta::select(array('macrorutas.id','macrorutas.macroruta_name','macrorutas.macroruta_estado','macrorutas.created_at','macrorutas.updated_at'))
        ->where('macrorutas.macroruta_user_creador','=',$request->json()->get('userid'))        
        ->orderBy("macroruta_name")->get();
        return response()->json($macroruta);
    }
    protected function createMacroruta(Request $request)
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

       $macroruta=Macroruta::create([
            'macroruta_name' => $request->json()->get('macroruta_name'),
            'macroruta_estado' => $request->json()->get('macroruta_estado'),
            'macroruta_mapa' => $request->json()->get('macroruta_mapa'),
            'macroruta_empresa_id' => $request->json()->get('macroruta_empresa_id'),
            'macroruta_pais' => $request->json()->get('macroruta_pais'),
            'macroruta_ciudad' => $request->json()->get('macroruta_ciudad'),
            'macroruta_user_creador' => $request->json()->get('macroruta_user_creador'),

        ]);

       

        return response()->json(compact('macroruta'),201);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getmacroruta(Request $request)
    {
        $macroruta = Macroruta::find($request->json()->get('macrorutaid'));
        return response()->json($macroruta);
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
        $macroruta = Macroruta::find($request->id);
        $macroruta->macroruta_name= $request->macroruta['macroruta_name'];
        $macroruta->macroruta_estado= $request->macroruta['macroruta_estado'];
        $macroruta->macroruta_mapa= $request->macroruta['macroruta_mapa'];
        $macroruta->macroruta_empresa_id= $request->macroruta['macroruta_empresa_id'];          
        $macroruta->macroruta_pais= $request->macroruta['macroruta_pais'];
        $macroruta->macroruta_ciudad= $request->macroruta['macroruta_ciudad'];
        $macroruta->macroruta_user_creador= $request->macroruta['macroruta_user_creador'];
        $macroruta->save();


        return response()->json('Macroruta Updated Successfully.');
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
      $macroruta = Macroruta::find($request->json()->get('macrorutaid'));
      $macroruta->macroruta_estado=0;
      $macroruta->save();

      return response()->json('Macro Ruta Inactivado.');
    }
    
}
