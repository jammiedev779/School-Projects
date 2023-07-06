<?php

namespace App\Http\Controllers\API;

use App\Models\Company;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class CompanyController extends Controller
{
    public function index()
    {
        $companys  = Company::all();
        if($companys){
            return response()->json([
                'companies' => $companys
            ]);
        }else{
            return response()->json([
                 'message' => 'Not Found'
            ]);
        };
    }
 
    public function show($id)
    {
        $company = Company::find($id);
        if($company){
            return response()->json([
                'company' => $company
            ]);
        }else{
            return response()->json([
                 'message' => 'Not Found'
            ]);
        };
    }
 
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'name' =>  'required|string|min:5',
            'location' => 'required|string|min:5',
            'website' => 'min:5',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        if($validator->failed()){
            return response()->json([
                'status' => 400,
                'errors' => $validator->messages()
            ],400);
        }else{
        
            $image = $request->file('image'); 
            $imageName = time().'-'.$image->getClientOriginalName();
            $image->move(public_path('images/company/'), $imageName);

            $rowCreated = DB::table('companies')->insertGetId([
                'name' => $request->input('name'),
                'location' => $request->input('location'),
                'website' => $request->input('website'),
                'image' => $imageName,
            ]);

            return response()->json([
                'company_id' => $rowCreated,
                'message' => 'Create successfully'
            ],201);
        }
    }
 
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(),[
            'name' =>  'string|min:5',
            'location' => 'string|min:5',
            'website' => 'min:5',
            'manager' => 'max:50',
            'email' => 'email|string',
            'bio' => 'max:600',
        ]);
        if($validator->failed()){
            return response()->json([
                'status' => 400,
                'errors' => $validator->messages()
            ],400);
        }else{

            $company = Company::find($id);
            $company->name = $request->Input('name');
            $company->manager = $request->Input('manager');
            $company->email = $request->Input('email');
            $company->website = $request->Input('website');
            $company->location = $request->Input('location');
            $company->bio = $request->Input('bio');
            $company->save();
        return response()->json([
            'message' => 'compa$company info is successfuly updated'
        ],201);
        }
    }
 
    public function delete( $id)
    {
        $company = Company::find($id);
        if($company){
            $company->delete();
            return response()->json([
                'status' => 201,
                'message' => 'Delete successfully'
            ],201);
        }else{
            return response()->json([
                'status' => 404,
                'message' => 'Not found'
            ],404);
        }
        
    }
}
