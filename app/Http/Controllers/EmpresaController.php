<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Empresa;
class EmpresaController extends Controller
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
        $empresavar = Empresa::orderBy("empresa_desc")->get();
        return response()->json($empresavar);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $empresavar = Empresa::where('empresa_id','=',$id)->get();
        return response()->json($empresavar);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $empresavar = Empresa::where('empresa_id','=',$id)->get();
        $empresavar->Empresa_desc = $request->get('empresa_desc');
        $empresavar->save();


        return response()->json('Empresa Updated Successfully.');
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
      $empresavar = Empresa::where('empresa_id','=',$id)->get();
      $empresavar->delete();


      return response()->json('Empresa Deleted Successfully.');
    }
}
