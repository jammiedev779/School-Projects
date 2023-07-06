<?php

namespace Database\Seeders;

use App\Models\Faq;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FaqSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Faq::truncate();
        $faker = \Faker\Factory::create();
        for ($i = 1; $i <= 10; $i++) {
            Faq::create([
                'question' => $faker->sentence,
                'answer' => $faker->paragraph
            ]);
        }
    }
}
