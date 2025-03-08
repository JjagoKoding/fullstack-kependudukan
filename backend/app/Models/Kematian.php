<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Kematian extends Model
{
    protected $table = 'tb_kematian';
    protected $primaryKey = 'id_kematian';
    protected $fillable = ['NIK', 'tanggal', 'alasan'];
    public $timestamps = false;

    public function viewpenduduk() {
        return $this->belongsTo(ViewPenduduk::class, 'NIK');
    }
}
