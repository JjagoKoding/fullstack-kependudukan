<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pindah extends Model
{
    protected $table = 'tb_pindah';
    protected $primaryKey = 'id_pindah';
    protected $fillable = ['NIK', 'tanggal_pindah', 'alasan'];
    public $timestamps = false;

    public function viewpenduduk() {
        return $this->belongsTo(ViewPenduduk::class, 'NIK');
    }
}
