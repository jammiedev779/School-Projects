<?php

namespace App\Http\Controllers\Api;

use File;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Date;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        $users = User::all();
        return response()->json([
            'users' => $users
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StoreUserRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $data = $request->validated();
        $data['password'] = bcrypt($data['password']);
        $user = User::create($data);

        return response(new UserResource($user) , 201);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\User $user
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return User::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdateUserRequest $request
     * @param \App\Models\User                     $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        $validator = Validator::make($request->all(),[
            'username' => 'min:3|max:100',
            'email' => 'email|string',
            'name' => 'min:3|max:100',
            'gender' => 'string',
            'bio' => 'max:600',
        ]);
        if($validator->failed()){
            return response()->json([
                'status' => 422,
                'erorrs' => $validator->messages()
            ],422);
        }

        $user = User::find($id);
        $user->name = $request->Input('name');
        $user->username = $request->Input('username');
        $user->email = $request->Input('email');
        $user->gender = $request->Input('gender');
        $user->bio = $request->Input('bio');
        $user->save();
        return response()->json([
            'message' => 'User info is successfuly updated'
        ],201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\User $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $user->delete();

        return response("", 204);
    }

    public function profileImage(Request $request,$id){
        $user = User::find($id);
        $validator = Validator::make($request->all(),[
            'profile_image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if($validator->failed()){
            return response()->json([
                'status' => 400,
                'errors' => $validator->messages()
            ],400);
        }else{
            if($user->profile_image){
                $image_path = 'images/profile_image/'.$user->profile_image;
    	        File::delete($image_path);
            }
            $image = $request->file('profile_image'); 
            $imageName = time().'-'.$image->getClientOriginalName();
            $image->move(public_path('images/profile_image/'), $imageName);

            $user->profile_image = $imageName;
            $user->save();
            return response()->json([
                'message' => "Update Profile Image Successfully"
            ]);
        }
    }
    
    public function uploadCV(Request $request, $id){
        
        DB::table('users')
            ->where('id', $id)
            ->update(['CV' => $request['CV']]);

        return response()->json([
            'message' => "Upload CV Successfully"
        ]);
    }

    public function downloadFile($fileName){
        $pathToFile = public_path('cv/' . $fileName);
        return response()->download($pathToFile);
    }

    public function getDataCurMon(){
        $curMon = Date::now()->month;
        $recentUsers = DB::table('users')
                ->select(DB::raw('MONTH(created_at) AS month'), DB::raw('COUNT(*) AS count'))
                ->whereIn(DB::raw('MONTH(created_at)'), [$curMon-2, $curMon-1, $curMon])
                ->groupBy(DB::raw('MONTH(created_at)'))
                ->get();


        $recentCompanies = DB::table('companies')
                ->select(DB::raw('MONTH(created_at) AS month'), DB::raw('COUNT(*) AS count'))
                ->whereIn(DB::raw('MONTH(created_at)'), [$curMon-2, $curMon-1, $curMon])
                ->groupBy(DB::raw('MONTH(created_at)'))
                ->get();
                

        return response()->json([
            'recentCompanies' => $recentCompanies,
            'recentUsers' => $recentUsers
        ]);
    }

}
