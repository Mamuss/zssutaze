<?php

namespace App\Http\Controllers;

class AuthController extends Controller
{
    function getPresentationView()
    {
      return inertia('presentation/Presentation');
    }

}
