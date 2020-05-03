<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Tests\TestCase;

class LoginTest extends TestCase
{
  
    public function testExample()
    {
        $this->withoutExceptionHandling();

        $credential = [
            'email'    => 'rohman3@mail.com',
            'password' => 'masukaja',
        ];

        $response = $this->json('POST', route('login'), $credential);
        $response
        ->assertStatus(200)->assertJsonStructure([
            'access_token',
            'token_type',
            'expires_in',
        ]);
    }
}
