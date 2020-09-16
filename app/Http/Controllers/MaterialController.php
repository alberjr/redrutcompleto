<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Material;
class MaterialController extends Controller
{
    
  /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //echo $request;
        //return response()->json($request->json()->get('userid'));
        $materialvar = Material::orderBy("material_name")->get();
        return response()->json($materialvar);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {
        $materialvar = Material::where('id','=',$request->json()->get('materialid'))->get();
        return response()->json($materialvar);
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

       $material=Material::create([
            'material_name' => $request->json()->get('material_name'),
        ]);

       

        return response()->json(compact('material'),201);

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
        $materialvar = Material::where('id','=',$request->json()->get('materialid'))->get();
        $materialvar->Material_name = $request->get('material_name');
        $materialvar->save();


        return response()->json('Material Updated Successfully.');
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
      $materialvar = Material::where('id','=',$request->json()->get('materialid'))->get();
      $materialvar->delete();


      return response()->json('Material Deleted Successfully.');
    }
}
