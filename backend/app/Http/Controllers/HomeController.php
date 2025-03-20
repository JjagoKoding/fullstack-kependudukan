<?php

namespace App\Http\Controllers;

use App\Models\RW;
use App\Helpers\Api;
use App\Models\Pindah;
use App\Models\Keluarga;
use App\Models\Kematian;
use App\Models\Provinsi;
use App\Models\Kecamatan;
use App\Models\Kelahiran;
use App\Models\Pendatang;
use App\Models\ViewPenduduk;
use Illuminate\Http\Request;
use App\Models\DesaKelurahan;
use App\Models\KotaKabupaten;
use App\Models\Pekerjaan;
use App\Models\Pendidikan;
use App\Models\RT;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    public function __invoke()
    {
        $dataKelahiranKematian = DB::select('SELECT viewbulan.nama_bulan, (SELECT COUNT(tb_kelahiran.id_kelahiran) FROM tb_kelahiran WHERE MONTH(tb_kelahiran.tanggal_lahir) = viewbulan.bulan AND YEAR(tb_kelahiran.tanggal_lahir) = 2025) AS jumlah_kelahiran, (SELECT COUNT(tb_kematian.id_kematian) FROM tb_kematian WHERE MONTH(tb_kematian.tanggal) = viewbulan.bulan AND YEAR(tb_kematian.tanggal) = 2025) AS jumlah_kematian FROM viewbulan;');
        $dataPendatangPindah = DB::select('SELECT viewbulan.nama_bulan, (SELECT COUNT(tb_pendatang.id_pendatang) FROM tb_pendatang WHERE MONTH(tb_pendatang.tanggal_datang) = viewbulan.bulan AND YEAR(tb_pendatang.tanggal_datang) = 2025) AS jumlah_pendatang, (SELECT COUNT(tb_pindah.id_pindah) FROM tb_pindah WHERE MONTH(tb_pindah.tanggal_pindah) = viewbulan.bulan AND YEAR(tb_pindah.tanggal_pindah) = 2025) AS jumlah_pindah FROM viewbulan;');
        $count = [
            'penduduk' => ViewPenduduk::where('status', 'Hidup')->count(),
            'keluarga' => Keluarga::count(),
            'kelahiran' => Kelahiran::count(),
            'kematian' => Kematian::count(),
            'pendatang' => Pendatang::count(),
            'pindah' => Pindah::count(),
            'provinsi' => Provinsi::count(),
            'kota_kabupaten' => KotaKabupaten::count(),
            'kecamatan' => Kecamatan::count(),
            'desa_kelurahan' => DesaKelurahan::count(),
            'rw' => RW::count(),
            'rt' => RT::count(),
            'pendidikan' => Pendidikan::count(),
            'pekerjaan' => Pekerjaan::count()
        ];
        return Api::make(Response::HTTP_OK, 'Data berhasil dimuat,', [
            'kelahiran_kematian' => $dataKelahiranKematian,
            'pendatang_pindah' => $dataPendatangPindah,
            'count' => $count
        ]);
    }
}
