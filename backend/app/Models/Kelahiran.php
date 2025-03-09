<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Kelahiran extends Model
{
    protected $table = 'tb_kelahiran';
    protected $primaryKey = 'id_kelahiran';
    protected $fillable = ['nama', 'tanggal_lahir', 'tempat', 'nik_ayah', 'nik_ibu'];
    public $timestamps = false;
}
