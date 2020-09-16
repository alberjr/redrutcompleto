<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMacrorutasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('macrorutas', function (Blueprint $table) {
            $table->increments('id');
            $table->string('macroruta_name');
            $table->string('macroruta_estado',1);            
            $table->string('macroruta_mapa');
            $table->integer('macroruta_empresa_id')->unsigned();
            $table->string('macroruta_pais');
            $table->string('macroruta_ciudad');
            $table->integer('macroruta_user_creador')->unsigned();
            $table->timestamps();
            //$table->primary(['macroruta_empresa_id', 'macroruta_pais','macroruta_ciudad','macroruta_name']);             
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('macrorutas');
    }
}
