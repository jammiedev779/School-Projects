<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Message;

class MessageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Message::truncate();
        $faker = \Faker\Factory::create();
        for ($i = 1; $i <= 10; $i++) {
            Message::create([
                'name' => $faker->name,
                'email' => $faker->email,
                'subject' => $faker->sentence,
                'message' => $faker->paragraph
            ]);
        }
    }
}
