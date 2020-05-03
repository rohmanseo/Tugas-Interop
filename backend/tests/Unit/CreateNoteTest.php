<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Tests\TestCase;
use App\User;

class CreateNoteTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function testExample()
    {
        $user = factory(User::class)->create();
        $data = [
                'title' => 'Hello world',
                'note' => 'this is note example'
        ];
        $response = $this->actingAs($user)
                    ->json('POST', route('note.store'),$data)
                    ->assertStatus(200)
                    ->assertJsonStructure([
                        'status',
                    ]);
    }
}
