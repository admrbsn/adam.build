@extends('layouts.app', ['body_class' => 'tech-support-page'])

@section('title', 'Tech Support')

@section('content')
    <div class="jumbotron position-relative mb-4 mb-md-0 pb-3 pb-md-0 rounded-0" style="background-image:url('{{ asset('images/banner.jpg') }}')">
        <div class="container my-lg-3 py-lg-5">
            <div class="row text-center">
                <div class="col-md-10 offset-md-1">
                    <h1 class="mb-3 text-white font-weight-bold">Tech Support</h1>
                </div>
            </div>
        </div>
    </div>

<div class="container my-5">
    <div class="row">
        <div class="col-12">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </div>
</div>
@stop
