<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Reporte;
use DB;
class ReporteController extends Controller
{
    /**
     * Display a listing of the resource. 
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        
        $reporte =  DB::table('reportes')
        ->join('rutas', 'reportes.reporte_idruta', '=', 'rutas.id')
        ->join('users', 'reportes.reporte_iduser', '=', 'users.id')
        ->select(array('reportes.id','rutas.ruta_name','users.name','reportes.reporte_cumplimiento','reportes.created_at','reportes.updated_at'))
        ->where('reportes.reporte_idusercreater','=',$request->json()->get('userid'))        
        ->orderBy('reportes.created_at','desc')->get();
        return response()->json($reporte);
    }
    protected function createReporte(Request $request)
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

       $reporte=Reporte::create([
            'reporte_idruta' => $request->json()->get('reporte_idruta'),
            'reporte_iduser' => $request->json()->get('reporte_iduser'),
            'reporte_cumplimiento' => $request->json()->get('reporte_cumplimiento'),
            'reporte_idusercreater' => $request->json()->get('reporte_idusercreater'),
        ]);

       

        return response()->json(compact('reporte'),201);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getreporte(Request $request)
    {
        $reporte =DB::table('reportes')
        ->join('rutas', 'reportes.reporte_idruta', '=', 'rutas.id')
        ->select(array('reportes.id','reportes.reporte_idruta','rutas.ruta_mapa','reportes.reporte_iduser','reportes.reporte_cumplimiento','reportes.reporte_idusercreater','reportes.created_at','reportes.updated_at'))
        ->where('reportes.id','=',$request->json()->get('reporteid'))->get();
        return response()->json($reporte);
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
        $reporte = Reporte::find($request->id);
        $reporte->reporte_idruta= $request->reporte['reporte_idruta'];
        $reporte->reporte_iduser= $request->reporte['reporte_iduser'];
        $reporte->reporte_cumplimiento= $request->reporte['reporte_cumplimiento'];
        $reporte->reporte_idusercreater= $request->reporte['reporte_idusercreater'];   
        $reporte->save();


        return response()->json('Reporte Updated Successfully.');
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $reporte = Reporte::find($request->json()->get('reporteid'));
      $reporte->delete();

      return response()->json('Reporte Eliminado.');
    }
    
}
