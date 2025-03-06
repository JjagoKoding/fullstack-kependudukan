<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Petugas;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        
        // Petugas::create([
        //     'nama_petugas' => 'Fahmi',
        //     'username' => 'fahmi',
        //     'password' => Hash::make("admin")
        // ]);

        $this->call([
            ProvinsiSeeder::class,
            KotaKabupatenSeeder::class,
            KecamatanSeeder::class,
            DesaKelurahanSeeder::class,
            // PekerjaanSeeder::class,
            // PendidikanSeeder::class,
            // PendudukSeeder::class,
            // KematianSeeder::class
        ]);

        // Seeder untuk Pekerjaan
        DB::table('tb_pekerjaan')->insert([
            ['keterangan' => 'Petani'],
            ['keterangan' => 'Nelayan'],
            ['keterangan' => 'Guru'],
            ['keterangan' => 'Dokter'],
            ['keterangan' => 'Polisi'],
            ['keterangan' => 'TNI'],
            ['keterangan' => 'Pegawai Negeri'],
            ['keterangan' => 'Wiraswasta'],
            ['keterangan' => 'Mahasiswa'],
            ['keterangan' => 'Buruh'],
        ]);

        // Seeder untuk Pendidikan
        DB::table('tb_pendidikan')->insert([
            ['keterangan' => 'SD'],
            ['keterangan' => 'SMP'],
            ['keterangan' => 'SMA'],
            ['keterangan' => 'D1'],
            ['keterangan' => 'D2'],
            ['keterangan' => 'D3'],
            ['keterangan' => 'S1'],
            ['keterangan' => 'S2'],
            ['keterangan' => 'S3'],
            ['keterangan' => 'Tidak Sekolah'],
        ]);

        DB::table('tb_rt')->insert([
            ['id_rt' => 1, 'rt' => '001'],
            ['id_rt' => 2, 'rt' => '002'],
            ['id_rt' => 3, 'rt' => '003'],
            ['id_rt' => 4, 'rt' => '004'],
            ['id_rt' => 5, 'rt' => '005'],
            ['id_rt' => 6, 'rt' => '006'],
            ['id_rt' => 7, 'rt' => '007'],
            ['id_rt' => 8, 'rt' => '008'],
            ['id_rt' => 9, 'rt' => '009'],
            ['id_rt' => 10, 'rt' => '010'],
        ]);
        
        DB::table('tb_rw')->insert([
            ['id_rw' => 1, 'rw' => '01'],
            ['id_rw' => 2, 'rw' => '02'],
            ['id_rw' => 3, 'rw' => '03'],
            ['id_rw' => 4, 'rw' => '04'],
            ['id_rw' => 5, 'rw' => '05'],
            ['id_rw' => 6, 'rw' => '06'],
            ['id_rw' => 7, 'rw' => '07'],
            ['id_rw' => 8, 'rw' => '08'],
            ['id_rw' => 9, 'rw' => '09'],
            ['id_rw' => 10, 'rw' => '10'],
        ]);

        $this->call([
            PendudukSeeder::class,
            KematianSeeder::class
        ]);

        DB::table('tb_keluarga')->insert([
            ['NOKK' => 1, 'alamat' => 'Jl. Baros', 'id_rt' => 2, 'id_rw' => 6, 'kode_pos' => 40171],
        ]);

        Petugas::create([
            'nama_petugas' => 'Admin Utama',
            'username' => 'admin',
            'password' => Hash::make("admin")
        ]);
    }
}
