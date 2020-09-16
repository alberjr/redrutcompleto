<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateComprasxrutasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comprasxrutas', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('compraxruta_idreporte')->unsigned();
            $table->integer('compraxruta_idmaterial')->unsigned();
            $table->double('compraxruta_valor', 8, 2);
            $table->double('compraxruta_peso', 8, 2);
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
        Schema::dropIfExists('comprasxrutas');
    }
}
