<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Macroruta extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'macroruta_name',
        'macroruta_estado',
        'macroruta_mapa',
        'macroruta_empresa_id',
        'macroruta_pais',
        'macroruta_ciudad',
        'macroruta_user_creador',
    ];
}
