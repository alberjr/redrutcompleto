<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\tdocumentos;
class TipoDocumentoController extends Controller
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
        $TipoDocumento = tdocumentos::orderBy("tdocumentos_codigo")->get();
        return response()->json($TipoDocumento);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $TipoDocumento = tdocumentos::where('tdocumentos_codigo','=',$id)->get();
        return response()->json($TipoDocumento);
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
        $TipoDocumento = tdocumentos::where('tdocumentos_codigo','=',$id)->get();
        $TipoDocumento->tdocumentos_desc = $request->get('tdocumentos_desc');
        $TipoDocumento->save();


        return response()->json('Tipo Documento Updated Successfully.');
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
      $TipoDocumento = tdocumentos::where('tdocumentos_codigo','=',$id)->get();
      $TipoDocumento->delete();


      return response()->json('Product Deleted Successfully.');
    }
}

