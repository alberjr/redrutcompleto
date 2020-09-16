<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class tdocumentos extends Model
{
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'tdocumentos_codigo', 
        'tdocumentos_desc',
    ];

    
}
