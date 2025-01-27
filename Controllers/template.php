<?php
	define('templateEmailClient','<!DOCTYPE html>
	<html lang="es">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Template Email</title>
		<style>
			@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap");
	
			body{
				margin: 0;
				padding: 0;
				box-sizing: border-box;
				font-family: "Poppins", sans-serif;
			}
			.header{
				height: 100px;
				width: 500px;
				background-color: hsl(260, 8%, 14%);
				border-top-left-radius: 10px;
				border-top-right-radius: 10px;
				text-align: center;
				padding: 20px 30px;
				box-sizing: border-box;
				margin-left: auto;
				margin-right: auto;
			}
			.header img{
				width: 150px;
				height: auto;
			}
			.body{
				width: 500px;
				min-height: 120vh;
				padding: 30px;
				box-sizing: border-box;
				background-image: url("https://www.rubrivero.com/img/correos/astronauta.jpg");
				background-size: cover;
				margin-left: auto;
				margin-right: auto;
			}
			.body h2{
				font-size: 2rem;
				font-weight: 800;
				color:#fff;
				text-align: center;
			}
			.body h2 span{
				color: hsl(180, 66%, 49%);
			}
			.footer{
				height: 80px;
				width: 500px;
				background-color: hsl(260, 8%, 14%);
				border-bottom-left-radius: 10px;
				border-bottom-right-radius: 10px;
				text-align: center;
				padding: 25px;
				box-sizing: border-box;
				margin-left: auto;
				margin-right: auto;
			}
			.footer img{
				width: 25px;
				height: 25px;
			}
			.footer a{
				margin-right: 20px;
			}
		</style>
	</head>
	<body>
		<div class="header">
			<img src="https://www.rubrivero.com/img/logo_cyan.png" alt="RubRivero">
		</div>
		<div class="body">
			<h2><span>¡Houston gracias por contactarnos!</span> En breve uno de nuestros colaboradores se pondra en contacto contigo.</h2>
		</div>
		<div class="footer">
			<a href="https://www.linkedin.com/in/rubén-daniel-rodríguez-rivero-aa666ab6"><img src="https://www.rubrivero.com/img/icon/linkedin.png" alt="linkedIn"></a>
			<a href="https://www.facebook.com/RubRiveroDigital/"><img src="https://www.rubrivero.com/img/icon/facebook.png" alt="facebook"></a>
			<a href="https://twitter.com/rubyrubyy"><img src="https://www.rubrivero.com/img/icon/twitter.png" alt="twitter"></a>
		</div>
	</body>
	</html>');
?>
