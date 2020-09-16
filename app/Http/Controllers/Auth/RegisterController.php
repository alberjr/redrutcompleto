<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function register(Request $request)
    {
        $validator= Validator::make($request->json->all(), [
            'user_nombre' => 'required|string|max:255',
            'user_tipo' => 'required|string|max:2',
            'user_email' => 'required|string|email|max:255|unique:users',
            'user_password' => 'required|string|min:6|confirmed',
            'user_imei' => 'string|max:100',
            'user_tdocumento' => 'required|string|max:2',
            'user_documento' => 'required|string|max:20',
            'user_estado' => 'required|string|max:1',
        ]);

         if($validator->fails()){
         return response->json($validator->errors()->toJson(),400);}

       $user=User::create([
            'user_nombre' => $request->json->get('user_nombre'),
            'user_tipo' => $request->json->get('user_tipo'),
            'user_email' => $request->json->get('email'),
            'user_password' => Hash::make($request->json->get('password'),
            'user_imei' => $request->json->get('user_imei'),
            'user_tdocumento' => $request->json->get('user_tdocumento'),
            'user_documento' => $request->json->get('user_documento'),
            'user_estado' => $request->json->get('user_estado'),

        ]);

        $token=mysql::fromUser($user);

        return response()->json(compact('user','token'),201);

    }

   
}
