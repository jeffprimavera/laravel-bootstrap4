<!doctype html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="de">  <!--<![endif]-->
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<meta name="description" content="">
	<meta name="keywords" content="">
	<title>Laravel Bootstrap Template</title>
	<link type="text/css" href="/css/bootstrap.min.css" rel="stylesheet">
	<link type="text/css" href="/css/magnific-popup.css" rel="stylesheet">
	<link type="text/css" href="/css/swiper.min.css" rel="stylesheet">
	<link type="text/css" href="/css/animate.css" rel="stylesheet">
	<link type="text/css" href="/css/themify-icons.css" rel="stylesheet">
	<link type="text/css" href="/css/font-awesome.min.css" rel="stylesheet">
	<link type="text/css" href="/css/et-line-icons.css" rel="stylesheet">
	<link type="text/css" href="/css/responsive.css" rel="stylesheet">
	<link type="text/css" href="/css/style.css" rel="stylesheet">
	<!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
	@include('includes.navbar')
	@if(Request::is('/'))
		@include('includes.slider')
	@endif
	<main>
		@yield('content')
	</main>
	
	@include('includes.footer')
</body>
</html>