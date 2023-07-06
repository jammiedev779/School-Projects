<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create(['name' => 'Job-Hunter-Admin',
            'email' => 'admin@gmail.com',
            'username' => 'admin-job-hunter',
            'gender' => 'none',
            'password' => bcrypt('12345678')]);
    }
}
