<?php

namespace Modules\Product\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Modules\Product\Entities\Type;

class TypeDatabaseSeeder extends Seeder
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
