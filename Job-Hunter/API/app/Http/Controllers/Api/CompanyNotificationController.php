<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\CompanyNotification;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

class CompanyNotificationController extends Controller
{
    public function index()
    {
        return CompanyNotification::all();
    }
 
    public function show(CompanyNotification $companyNotification)
    {
        return $companyNotification;
    }
 
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'post_id' => 'required',
            'user_id' => 'required',
            'company_id' => 'required',
            'title' => 'required',
            'body' => 'required',
            'CV' => 'required'
        ]);
        if($validator->failed()){
            return response()->json([
                'status' => 422,
                'erorrs' => $validator->messages()
            ],422);
        }else{

            // insert data into table
            DB::table('company_notification')->insert([
                'post_id' => $request->input('post_id'),
                'user_id' => $request->input('user_id'),
                'company_id' => $request->input('company_id'),  
                'title' => $request->input('title'),  
                'body' => $request->input('body'),  
                'CV' => $request->input('CV'),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
        }
        return response()->json([
                    'message' => 'Added Successfully'
                ],201);
    }
 
    public function update(Request $request, $id)
    {
        $companyNotification = CompanyNotification::find($id)->update($request->all());
 
        return response()->json($companyNotification, 200);
    }
 
    public function delete($post_id,$user_id)
    {
        CompanyNotification::where('post_id',$post_id)->where('user_id',$user_id)->first()->delete();
        return response()->json(null, 204);
    }

    public function notification($id)
    {
        $companyNotification = CompanyNotification::where('company_id', $id)->orderBy('seen')->orderBy('created_at')->get();
        $newCompanyNotification = CompanyNotification::where('company_id', $id)->where('seen', false)->count();
        return response()->json([
            'companyNotification' => $companyNotification,
            'newCompanyNotification' => $newCompanyNotification
        ]);
    }
}
