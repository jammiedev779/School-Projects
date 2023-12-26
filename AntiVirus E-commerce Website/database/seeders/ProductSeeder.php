<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;
use App\Models\Category;
use App\Models\Event;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Product::truncate();
        $faker = \Faker\Factory::create();
        for ($i = 1; $i <= 20; $i++) {
            Product::create([
                'name' => $faker->word,
                'price' => $faker->randomFloat(2, 0, 1000),
                'image' => $faker->image('public/img', 360, 360, NULL, false, true, NULL, false),
                'category_id' => Category::all()->random()->id,
                'description' => $faker->paragraph,
            ]);
        }
    }
}
