<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Microruta extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'microruta_ruta_id',
        'microruta_direccion',
        'microruta_latitud',
        'microruta_longitud',
        'microruta_user_creador',
    ];
}
