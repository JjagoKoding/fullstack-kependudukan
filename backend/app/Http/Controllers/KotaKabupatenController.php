<?php

namespace App\Http\Controllers;

use App\Helpers\Api;
use App\Models\KotaKabupaten;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class KotaKabupatenController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $kota_kabupaten = KotaKabupaten::select('id_kota_kabupaten', 'id_provinsi',DB::raw("CONCAT(jenis, ' ', nama) AS kota_kabupaten"))->with('provinsi')->get()->makeHidden(['id_provinsi']);
        return Api::make(Response::HTTP_OK, 'Data berhasil dimuat.', $kota_kabupaten);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(KotaKabupaten $kota_kabupaten)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(KotaKabupaten $kota_kabupaten)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, KotaKabupaten $kota_kabupaten)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(KotaKabupaten $kota_kabupaten)
    {
        //
    }
}
