<?php

namespace App\Http\Controllers;

use App\Models\DetailKeluarga;
use App\Models\ViewDetailKeluarga;
use Illuminate\Http\Request;
use App\Helpers\Api;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

class DetailKeluargaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->input('search');
        $id = $request->input('id');
        $detailkeluarga = ViewDetailKeluarga::where('NOKK', $id)->get();
        return Api::make(Response::HTTP_OK, 'Data berhasil dimuat', $detailkeluarga);
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
    public function show(DetailKeluarga $detailKeluarga)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(DetailKeluarga $detailKeluarga)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, DetailKeluarga $detailKeluarga)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DetailKeluarga $detailKeluarga)
    {
        //
    }
}
