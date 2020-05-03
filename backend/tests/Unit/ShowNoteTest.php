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
        $user = factory(User::class)->create();
        $response = $this->actingAs($user)
                    ->json('GET', route('note.index'))
                    ->assertStatus(200)
                    ->assertJsonStructure([
                        'status',
                        'data',
                    ]);
    }
}
