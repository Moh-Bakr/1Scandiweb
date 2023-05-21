<?php

namespace Modules\Product\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class TypeDatabaseSeederTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        Type::create(['name' => 'DVD']);
        Type::create(['name' => 'Book']);
        Type::create(['name' => 'Furniture']);
    }
}
