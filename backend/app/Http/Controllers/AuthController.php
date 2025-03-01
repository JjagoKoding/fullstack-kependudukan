<?php

namespace App\Http\Controllers;

use finfo;
use App\Models\Petugas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Response;

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

        return response($image->image)
            ->header('Content-Type', 'image/jpeg');
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Logged out successfully']);
    }
}
