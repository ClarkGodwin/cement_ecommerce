@extends('layouts.header')

@section('title', 'Home')

@section('content')

<section class="bg-gray dark:bg-blue px-[7%] py-10">
	@for ($i=0; $i < 4; $i++)
	<p class="font-wittgenstein text-black dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis maxime sapiente, autem vitae, sequi, culpa tempore praesentium neque explicabo temporibus aperiam laborum unde nihil non ipsa similique quo ab perspiciatis.</p>
			
	@endfor

</section>

<section class="bg-white dark:bg-dark_blue px-[7%] pt-10 pb-[150px]">
	@for ($i=0; $i < 4; $i++)
	<p class="font-wittgenstein text-black dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis maxime sapiente, autem vitae, sequi, culpa tempore praesentium neque explicabo temporibus aperiam laborum unde nihil non ipsa similique quo ab perspiciatis.</p>
			
	@endfor

</section>

@endsection
