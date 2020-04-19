<?php

namespace App;

use DB;
use Illuminate\Database\Eloquent\Model;

class API extends Model
{
    public static function getLeaders()
    {
        return DB::table('leaders')->get();
    }
}
