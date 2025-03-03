<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class KecamatanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tb_kecamatan')->insert([
            ['id_kecamatan' => 1, 'nama_kecamatan' => 'Cicendo', 'id_kota_kabupaten' => 1],
            ['id_kecamatan' => 2, 'nama_kecamatan' => 'Andir', 'id_kota_kabupaten' => 1],
            ['id_kecamatan' => 3, 'nama_kecamatan' => 'Medan Satria', 'id_kota_kabupaten' => 2],
            ['id_kecamatan' => 4, 'nama_kecamatan' => 'Pedurungan', 'id_kota_kabupaten' => 3],
            ['id_kecamatan' => 5, 'nama_kecamatan' => 'Gubeng', 'id_kota_kabupaten' => 4],
        ]);
    }
}
