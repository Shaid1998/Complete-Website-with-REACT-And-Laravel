<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\project;

class ProjectController extends Controller
{
    public function OnSelectAll(){
        $result = project::all();
        return $result;
    }//End Method
    public function OnSelectTheree(){
        $result = project::limit(3)->get();
        return $result;
    }//End Method
    public function onSelectProject(Request $request){
        $id = $request->input('id');
        $result = project::where('id',$id)->get();
        return $result;
    }//End Method
    
}
