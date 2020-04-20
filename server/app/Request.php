<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;

class Request extends Model
{
    public static function createRequest($data)
    {
        $data['time'] = date("Y-m-d H:i:s");
        DB::table('requests')->insert($data);
    }
}
