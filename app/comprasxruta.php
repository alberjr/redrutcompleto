<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comprasxruta extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'compraxruta_idreporte',
        'compraxruta_idmaterial',
        'compraxruta_valor',
        'compraxruta_peso',
    ];
}
