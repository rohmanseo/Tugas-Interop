<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Tests\TestCase;
use App\User;

class ShowProfileTest extends TestCase
{

    public function testExample()
    {
        $user = CreateUser::getUser();        
        $response = $this->actingAs($user)
                    ->postJson(route('profile'))
                    ->assertStatus(200)
                    ->assertJsonStructure([
                        'id',
                        'name',
                        'email',
                        'email_verified_at',
                        'created_at',
                        'updated_at',
                    ])->getContent();
    }
}
