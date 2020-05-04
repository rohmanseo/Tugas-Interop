<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Tests\TestCase;
use App\User;

class ZDeleteNoteTest extends TestCase
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

        if(!empty($noteId)){
            $response = $this->actingAs($user)
            ->deleteJson('api/note/'.$noteId)
            ->assertStatus(200)
            ->assertJsonStructure([
                'status',
            ]);
        }
    }
}
