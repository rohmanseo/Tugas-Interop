<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Tests\TestCase;
use App\User;

class ShowNoteTest extends TestCase
{
   
    public function testExample()
    {
        $user = CreateUser::getUser();        
        $response = $this->actingAs($user)
                    ->getJson(route('note.index'))
                    ->assertStatus(200)
                    ->assertJsonStructure([
                        'status',
                        'data',
                    ]);
    }
}
