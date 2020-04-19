<?php

namespace App\Http\Controllers;

use App\API;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function csrf()
    {
        return json_encode(csrf_token());
    }

    public function leaders()
    {
        $leaders = API::getLeaders();

        return json_encode($leaders, JSON_UNESCAPED_UNICODE);
    }

    public function request(Request $request)
    {
        return response()->json([$request->all()], 200);
    }
}
