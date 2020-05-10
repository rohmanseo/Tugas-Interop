<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Tests\TestCase;
use App\User;

class UpdateNoteTest extends TestCase
{

    public function testExample()
    {
        $user = CreateUser::getUser();        
        $notes = $this->actingAs($user)
                    ->getJson(route('note.index'))
                    ->assertStatus(200)
                    ->assertJsonStructure([
                        'status',
                        'data',
                    ])->getContent();
        $notesArr = json_decode($notes,true);
        $noteId = $notesArr['data'][0]['id'];

        $updateNote = [
            'title' => 'This is updated title!',
            'note' => 'Update test was successfully'
        ];
        if(!empty($noteId)){
            $response = $this->actingAs($user)
            ->putJson('api/note/'.$noteId,$updateNote)
            ->assertStatus(200)
            ->assertJsonStructure([
                'status',
            ]);
        }
    }
}
