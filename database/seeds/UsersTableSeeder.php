<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Alber Barros',
            'user_tipo' => 1,
            'email' => 'alberdj.b@gmail.com',
            'password' => Hash::make('tempo123'),
            'user_imei' => null,
            'user_tdocumento' => 1,
            'user_documento' => '1118841822',
            'user_fecha_nacimiento' => '02-06-1992',
            'user_empresa_id'=> 1,
            'user_pais'=> 'Colombia',
            'user_ciudad'=> 'Riohacha',
            'user_estado' => 1,
            'user_user_creador' => 1,
            ]);
    }
}
