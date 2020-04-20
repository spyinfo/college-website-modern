<?php

namespace App;

use DB;
use Illuminate\Database\Eloquent\Model;

class Leader extends Model
{
    public static function getAll()
    {
        return DB::table('leaders')->get();
    }
}
