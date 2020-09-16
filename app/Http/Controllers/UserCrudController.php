<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
class UserCrudController extends Controller
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
        $user = User::select(array('users.id','users.name','users.user_tdocumento','roll.roll_desc','users.user_documento','users.user_estado','empresas.empresa_desc','users.user_pais','users.user_ciudad','users.created_at','users.updated_at'))
        ->where('users.id','!=',$request->json()->get('userid'))
        ->where('users.user_user_creador','=',$request->json()->get('userid'))
        ->join('roll', 'roll.roll_codigo', '=', 'users.user_tipo')
        ->join('empresas', 'empresas.empresa_id', '=', 'users.user_empresa_id')
        ->orderBy('users.name', 'ASC')
        ->get();
        return response()->json($user);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getuser(Request $request)
    {
        $user = User::find($request->json()->get('userid'));
        return response()->json($user);
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
        $user = User::find($request->id);
        $user->name= $request->user['name'];
        $user->user_tipo= $request->user['user_tipo'];
        $user->email= $request->user['email'];          
        $user->user_imei= $request->user['user_imei'];
        $user->user_tdocumento= $request->user['user_tdocumento'];
        $user->user_documento= $request->user['user_documento'];
        $user->user_fecha_nacimiento= $request->user['user_fecha_nacimiento'];
        $user->user_empresa_id= $request->user['user_empresa_id'];
        $user->user_pais= $request->user['user_pais'];
        $user->user_ciudad= $request->user['user_ciudad'];
        $user->user_estado= $request->user['user_estado'];
        $user->user_user_creador= $request->user['user_user_creador'];
        $user->save();


        return response()->json('Product Updated Successfully.');
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
      $user = User::find($request->json()->get('userid'));
      $user->user_estado=0;
      $user->save();

      return response()->json('Usuario Inactivado.');
    }
}
