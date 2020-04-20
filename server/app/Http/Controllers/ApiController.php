<?php

namespace App\Http\Controllers;

use App\Leader;
use App\Request as RequestUser;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function csrf()
    {
        return response()->json(csrf_token());
    }

    public function leaders()
    {
        $leaders = Leader::getAll();

        return response()->json($leaders, JSON_UNESCAPED_UNICODE);
    }

    public function request(Request $request)
    {
        $data = $request->all();

        RequestUser::createRequest($data);

        return response()->json(['message' => 'Success']);
    }
}
