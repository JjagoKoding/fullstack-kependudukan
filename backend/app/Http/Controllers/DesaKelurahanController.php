<?php

namespace App\Http\Controllers;

use App\Helpers\Api;
use Illuminate\Http\Request;
use App\Models\DesaKelurahan;
use App\Models\ViewWilayah;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class DesaKelurahanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->input('search');
        $desakelurahan = ViewWilayah::where('desa_kelurahan', 'like', "%$search%")->get();
        return Api::make(Response::HTTP_OK, 'Data berhasil dimuat.', $desakelurahan);
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
    public function show(DesaKelurahan $desakelurahan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(DesaKelurahan $desakelurahan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, DesaKelurahan $desakelurahan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DesaKelurahan $desakelurahan)
    {
        //
    }
}
