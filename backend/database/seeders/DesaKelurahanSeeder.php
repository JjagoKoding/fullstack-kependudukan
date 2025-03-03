<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DesaKelurahanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tb_desa_kelurahan')->insert([
            ['kode_pos' => 40171, 'nama' => 'Sukajadi', 'jenis' => 'Kelurahan', 'id_kecamatan' => 1],
            ['kode_pos' => 40172, 'nama' => 'Pasteur', 'jenis' => 'Kelurahan', 'id_kecamatan' => 1],
            ['kode_pos' => 17113, 'nama' => 'Kaliabang Tengah', 'jenis' => 'Kelurahan', 'id_kecamatan' => 3],
            ['kode_pos' => 50273, 'nama' => 'Tlogosari', 'jenis' => 'Kelurahan', 'id_kecamatan' => 4],
            ['kode_pos' => 60281, 'nama' => 'Manyar', 'jenis' => 'Kelurahan', 'id_kecamatan' => 5],
        ]);
    }
}
