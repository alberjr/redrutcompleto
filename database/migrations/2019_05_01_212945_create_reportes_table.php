<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReportesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reportes', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('reporte_idruta')->unsigned();
            $table->integer('reporte_iduser')->unsigned();            
            $table->boolean('reporte_cumplimiento');
            $table->integer('reporte_idusercreater')->unsigned();
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
        Schema::dropIfExists('reportes');
    }
}
