<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('user_tipo',3);
            $table->string('email')->unique();
           // $table->timestamp('user_email_verified_at')->nullable();
            $table->string('password');
            $table->string('user_imei')->nullable();
            $table->string('user_tdocumento',3);
            $table->string('user_documento');
            $table->string('user_fecha_nacimiento');
            $table->integer('user_empresa_id')->unsigned();
            $table->string('user_pais');
            $table->string('user_ciudad');
            $table->string('user_estado',1);
            $table->integer('user_user_creador')->unsigned();
            $table->rememberToken();
            $table->timestamps();
            $table->foreign('user_empresa_id')->references('empresa_id')->on('empresa');
            $table->foreign('user_tipo')->references('roll_codigo')->on('roll');
            $table->foreign('user_tdocumento')->references('tdocumentos_codigo')->on('tdocumentos');
        });
    }


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
