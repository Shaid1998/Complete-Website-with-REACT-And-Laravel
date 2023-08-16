<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\project;

class ProjectController extends Controller
{
    public function Projectview(){
        $result = project::all();
        return $result;
    }//End Method
    public function ProjectviewOne(){
        $result = project::limit(1)->get();
        return $result;
    }//End Method
    public function onSelectProject(Request $request){
        $id = $request->input('id');
        $result = project::where('id',$id)->get();
        return $result;
    }//End Method
    
}
