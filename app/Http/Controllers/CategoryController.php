<?php

namespace App\Http\Controllers;

use App\Enums\StatusType;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index()
    {
        return Inertia::render('Category/Index');
    }

    public function create()
    {
        // get status type 
        $status = array_map(function ($value) {
            return (object)['id' => $value, 'title' => $value];
        }, StatusType::getConstants());

        return Inertia::render('Category/Create', [
            'status' => $status
        ]);
    }
}
