<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RW extends Model
{
    protected $table = 'tb_rw';
    protected $primaryKey = 'id_rw';
    public $timestamps = false;
    protected $fillable = ['rw'];
}