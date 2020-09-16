<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMicrorutasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('microrutas', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('microruta_ruta_id')->unsigned();
            $table->string('microruta_direccion');
            $table->string('microruta_latitud');
            $table->string('microruta_longitud');
            $table->integer('microruta_user_creador')->unsigned();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('microrutas');
    }
}
