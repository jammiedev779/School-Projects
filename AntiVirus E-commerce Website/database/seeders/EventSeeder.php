<?php

namespace Database\Seeders;
use App\Models\Event;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Event::truncate();
        $faker = \Faker\Factory::create();
        for ($i = 1; $i <= 10; $i++) {
            Event::create([
                'name' => $faker->word,
                'start_date' => $faker->date(),
                'end_date' => $faker->date(),
                'discount' => $faker->random_int(0,100)
            ]);
        }
    }
}
