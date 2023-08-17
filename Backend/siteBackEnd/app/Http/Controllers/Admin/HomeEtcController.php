<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\HomeEtc;

class HomeEtcController extends Controller
{
    public function HomeVideo(){
        $result =HomeEtc::select('video_description', 'video_url')->get();
        return $result;
    }

    public function TotalHome(){
        $result =HomeEtc::select('total_project', 'total_hour', 'total_course')->get();
        return $result;
    }

    public function SelectTecHome(){
        $result =HomeEtc::select('tech_description')->get();
        return $result;
    }

    public function SelectHomeTitle(){
        $result =HomeEtc::select('home_title', 'home_sub_title')->get();
        return $result;
    }
}
