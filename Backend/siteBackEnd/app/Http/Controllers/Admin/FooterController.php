<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\FooterModel;


class FooterController extends Controller
{
    public function footerAll(){
        $result = FooterModel::all();
        return $result;
    }//End Method
}
