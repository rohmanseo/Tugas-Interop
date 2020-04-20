<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Note;

class NoteController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }
  
    public function index(){
        $user = auth()->user();
        return response()->json([
            'status' => 'success',
            'data' => $user->notes
        ]);
    }

    
    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'note' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $user = auth()->user();
        Note::create([
            'user_id' => $user->id,
            'title' => $request->input('title'),
            'note' => $request->input('note')
        ]);

        return response()->json([
            'status' => 'success'
        ]);
    }

    public function show($id)
    {
        
        $data = Note::findOrFail($id);
        return response()->json([
            "status" => "success",
            "data" => $data
        ]);
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'title'=>'required',
            'note' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $data = [
            'title' => $request->input('title'),
            'note' => $request->input('note'),
        ];
        Note::where('id',$id)->update($data);

        return response()->json([
            'status' => 'success',
        ]);
    }

    public function destroy($id)
    {
        $user = auth()->user();
        $whishlist = Note::where('user_id',$user->id)
                    ->where('id',$id)->delete();

        return response()->json([
            'status' => 'suceess',
        ]);
    }

}