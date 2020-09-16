<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reporte extends Model
{
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'reporte_idruta',
        'reporte_iduser',
        'reporte_cumplimiento',
        'reporte_idusercreater',
    ];
}
