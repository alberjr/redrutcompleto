<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ruta extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'ruta_name',
        'ruta_lunes_ind',
        'ruta_martes_ind',
        'ruta_miercoles_ind',
        'ruta_jueves_ind',
        'ruta_viernes_ind',
        'ruta_sabado_ind',
        'ruta_domingo_ind',
        'ruta_empresa_id',        
        'ruta_mapa',
        'ruta_pais',
        'ruta_ciudad',
        'ruta_user_creador',
        'ruta_estado',
    ];
}
