<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ProvinsiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tb_provinsi')->insert([
            ['id_provinsi' => 1, 'nama_provinsi' => 'Jawa Barat'],
            ['id_provinsi' => 2, 'nama_provinsi' => 'Jawa Tengah'],
            ['id_provinsi' => 3, 'nama_provinsi' => 'Jawa Timur'],
            ['id_provinsi' => 4, 'nama_provinsi' => 'Sumatera Utara'],
            ['id_provinsi' => 5, 'nama_provinsi' => 'Bali'],
        ]);
    }
}
