<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\facades\JWTAuth;
use Tymon\JWTAuth\facades\JWTFactory;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Tymon\JWTAuth\PayloadFactory;
use Tymon\JWTAuth\JWTManager as JWT;
class UserController extends Controller
{
    
    protected function register(Request $request)
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

       $user=User::create([
            'name' => $request->json()->get('name'),
            'user_tipo' => $request->json()->get('user_tipo'),
            'email' => $request->json()->get('email'),
            'password' => Hash::make($request->json()->get('password')),
            'user_imei' => $request->json()->get('user_imei'),
            'user_tdocumento' => $request->json()->get('user_tdocumento'),
            'user_documento' => $request->json()->get('user_documento'),
            'user_fecha_nacimiento' => $request->json()->get('user_fecha_nacimiento'),
            'user_empresa_id'=> $request->json()->get('user_empresa_id'),
            'user_pais'=> $request->json()->get('user_pais'),
            'user_ciudad'=> $request->json()->get('user_ciudad'),
            'user_estado' => $request->json()->get('user_estado'),
            'user_user_creador' => $request->json()->get('user_user_creador'),

        ]);

       

        return response()->json(compact('user'),201);

    }


    public function login(Request $request){
        $credentials= $request->json()->all();

        try{

            if(! $token = JWTAuth::attempt($credentials)){
                    return response()->json(['error'=>'invalid_credentials'],400);

            }
        } catch(JWTException $e){
            return response()->json(['error'=>'could_not_create_token'],500);
        }
        /*$datos["token"]=$token;
        $datos["user"]=JWTAuth::parseToken()->authenticate()*/
        return response()->json(compact('token'));
    }

   public function getAuthenticatedUser(){

    try{
        if(!$user=JWTAuth::parseToken()->authenticate()){
             return response()->json('user_not_found',404);
        }

    }catch(Tymon\JWTAuth\Exceptions\TokenExpiredException $e){
        return response()->json(['token_expired'],$e->getStatusCode());
    }
    catch(Tymon\JWTAuth\Exceptions\TokenInvalidException $e){
        return response()->json(['token_invalid'],$e->getStatusCode());
    }
    catch(Tymon\JWTAuth\Exceptions\JWTException $e){
        return response()->json(['token_absent'],$e->getStatusCode());
    }

    return response()->json(compact('user'));


   }

   
}
