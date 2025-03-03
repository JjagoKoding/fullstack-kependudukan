<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class KotaKabupatenSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tb_kota_kabupaten')->insert([
            ['id_kota_kabupaten' => 1, 'nama' => 'Bandung', 'jenis' => 'Kota', 'id_provinsi' => 1],
            ['id_kota_kabupaten' => 2, 'nama' => 'Bekasi', 'jenis' => 'Kota', 'id_provinsi' => 1],
            ['id_kota_kabupaten' => 3, 'nama' => 'Semarang', 'jenis' => 'Kota', 'id_provinsi' => 2],
            ['id_kota_kabupaten' => 4, 'nama' => 'Surabaya', 'jenis' => 'Kota', 'id_provinsi' => 3],
            ['id_kota_kabupaten' => 5, 'nama' => 'Denpasar', 'jenis' => 'Kota', 'id_provinsi' => 5],
            ['id_kota_kabupaten' => 6, 'nama' => 'Kabupaten Bogor', 'jenis' => 'Kabupaten', 'id_provinsi' => 1],
        ]);
    }
}
