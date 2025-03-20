<?php

namespace App\Http\Controllers;

use finfo;
use App\Helpers\Api;
use App\Models\Petugas;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Response;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'username' => 'required',
            'password' => 'required',
        ]);

        $petugas = Petugas::where('username', $request->username)->first();

        if (!$petugas || !Hash::check($request->password, $petugas->password)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $token = $petugas->createToken('auth_token')->plainTextToken;

        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
        ]);
    }

    public function profile(Request $request)
    {
        return response()->json(collect($request->user())->except('image'));
    }

    public function avatar($id)
    {
        $image = Petugas::findOrFail($id);
        if($image->image == null) {
            return Api::make(404, 'Avatar not found.', null);
        }

        return response($image->image)
            ->header('Content-Type', 'image/jpeg');
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Logged out successfully']);
    }

    public function updateProfile(Request $request)
    {
        $petugas = $request->user();
        $validasi = $request->validate([
            'nama_petugas' => 'required',
            'username' => [
                'required',
                Rule::unique('tb_petugas', 'username')->ignore($petugas, 'username')
            ]
        ]);
        $petugas->update($validasi);
        return Api::make(200, 'Data berhasil diubah', null);
    }

    public function updateAvatar(Request $request)
    {
        try {
            $petugas = $request->user();
            $request->validate([
                'image' => 'required'
            ]);
            $imageData = file_get_contents($request->file('image')->getRealPath());
            $petugas->update(['image' => $imageData]);
            return Api::make(200, 'Avatar berhasil diubah.', null);
        } catch (ValidationException $e) {
            return Api::make(422, 'Validation Failed', null);
        }
    }
}
