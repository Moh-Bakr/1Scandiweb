<?php

namespace Modules\Product\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'price', 'sku', 'type_id', 'size', 'weight', 'width', 'height', 'length'];

    protected $appends = ['type_name'];

    public function type()
    {
        return $this->belongsTo(Type::class);
    }

    public function getTypeNameAttribute()
    {
        return $this->type->name;
    }

    protected $hidden = [
        'created_at', 'updated_at', 'type_id'
    ];

    protected static function newFactory()
    {
        return \Modules\Product\Database\factories\ProductFactory::new();
    }

}
