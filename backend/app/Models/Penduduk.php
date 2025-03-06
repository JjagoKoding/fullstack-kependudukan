<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Penduduk extends Model
{
    protected $table = 'tb_penduduk';
    protected $primaryKey = 'NIK';
    protected $fillable = ['NIK', 'nama', 'tempat_lahir', 'tanggal_lahir', 'jk', 'alamat', 'agama', 'id_pekerjaan', 'id_pendidikan', 'kewarganegaraan', 'golongan_darah', 'status_perkawinan'];
    public $timestamps = false;
}
