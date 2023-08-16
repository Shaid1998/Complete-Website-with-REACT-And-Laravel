<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Models\information;

class InformationController extends Controller
{
    public function informationAll(){
        $result = information::all();
        return $result;
    }//End Method
}
