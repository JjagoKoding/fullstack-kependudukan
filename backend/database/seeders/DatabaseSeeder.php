<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Petugas;
use Illuminate\Database\Seeder;
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
        //     'nama_petugas' => 'Admin Utama',
        //     'username' => 'admin',
        //     'password' => Hash::make("admin")
        // ]);
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
            PekerjaanSeeder::class,
            PendidikanSeeder::class,
            PendudukSeeder::class,
            KematianSeeder::class
        ]);
    }
}
