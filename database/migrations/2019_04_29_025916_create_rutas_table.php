<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRutasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rutas', function (Blueprint $table) {
            $table->increments('id');
            $table->string('ruta_name');
            $table->string('ruta_lunes_ind',1);
            $table->string('ruta_martes_ind',1);
            $table->string('ruta_miercoles_ind',1);
            $table->string('ruta_jueves_ind',1);
            $table->string('ruta_viernes_ind',1);
            $table->string('ruta_sabado_ind',1);
            $table->string('ruta_domingo_ind',1);
            $table->integer('ruta_empresa_id')->unsigned();            
            $table->string('ruta_mapa');
            $table->string('ruta_pais');
            $table->string('ruta_ciudad');
            $table->integer('ruta_user_creador')->unsigned();
            $table->string('ruta_estado',1);
            $table->timestamps();
           // $table->primary('ruta_pk',['ruta_empresa_id', 'ruta_pais','ruta_ciudad','ruta_name']); 
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rutas');
    }
}
