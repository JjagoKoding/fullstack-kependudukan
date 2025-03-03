<?php

namespace App\Http\Controllers;

use App\Helpers\Api;
use Illuminate\Http\Request;
use App\Models\DesaKelurahan;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class DesaKelurahanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // $search = $request->input('search');
        // $kecamatan = DesaKelurahan::select('id_desa_kelurahan', DB::raw("CONCAT(jenis, ' ', nama)"), 'id_kecamatan')->with(['kecamatan' => function ($query) {
        //     $query->selectRaw("id_kota_kabupaten, CONCAT(jenis, ' ', nama) AS kota_kabupaten, id_provinsi")->with('provinsi');
        // }])->where('nama_kecamatan', 'like', "%$search%")->get();
        // return Api::make(Response::HTTP_OK, 'Data berhasil dimuat.', $kecamatan);
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
    public function show(DesaKelurahan $desaKelurahan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(DesaKelurahan $desaKelurahan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, DesaKelurahan $desaKelurahan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DesaKelurahan $desaKelurahan)
    {
        //
    }
}
