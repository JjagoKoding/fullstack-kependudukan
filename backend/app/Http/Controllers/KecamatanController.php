<?php

namespace App\Http\Controllers;

use App\Helpers\Api;
use App\Models\Kecamatan;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class KecamatanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->input('search');
        $kecamatan = Kecamatan::select('id_kecamatan', 'nama_kecamatan', 'id_kota_kabupaten')->with(['kotakabupaten' => function ($query) {
            $query->selectRaw("id_kota_kabupaten, CONCAT(jenis, ' ', nama) AS kota_kabupaten, id_provinsi")->with('provinsi');
        }])->where('nama_kecamatan', 'like', "%$search%")->get();
        return Api::make(Response::HTTP_OK, 'Data berhasil dimuat.', $kecamatan);
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
    public function show(Kecamatan $kecamatan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Kecamatan $kecamatan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Kecamatan $kecamatan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Kecamatan $kecamatan)
    {
        //
    }
}
