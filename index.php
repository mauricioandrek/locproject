<?php
?>
<!DOCTYPE html>
<html lang="en">

<html>
<head>
	<link type="text/css" rel="stylesheet" href="css/index.css"/>
	<meta charset="utf-8">
	<title>Locadora</title>
</head>
<body onload="LOC.init()">
	<div class="header" id="id-header">
		<h1 class="title_header" id="id_title_header">REVOLUTION <br>LOCADORA</br></h1>
			<div class="button_login" id="id_button_login">
				<p>LOGIN</p>
			</div>
			<div class="button_signin" id="id_button_signin">
				<p>ABRIR CADASTRO</p>
			</div>
		<div class="search_header" id="id-search-header">
			<form action="search.php" id="id-search-form" class="form_search" method="post">
				<input type="text" name="stringhead" value="" style="198%; height: 10%; line-height: 1,8; margin-left: -212%;">
				<input type="submit" class="search_button" value="buscar">
			</form>
		</div>
	</div>
	
	<div class="menu_actions" id="id-menu-actions">
		
		<div class="button_film" id="id-button-films">
		</div>
		<div class="button_news" id="id-button-news">
			<p>NOTICIAS</p>
		</div>
		<div class="button_promotions" id="id-button-promotions">
			<p>PROMOCOES</p>
		</div>
		<div class="button_info" id="id-button-info">
			<p>A LOCADORA</p>
		</div>
		<div class="button_contact" id="id-button-contact">
			<p>CONTATO</p>
		</div>
	</div>
	<div class="content" id="id-content"> 
		<div class="search_films" id="id-search-films" style="display:none">  
			<div class="search_films_form" id="id-search-films">
					
					<form id="id-check-button" class="check_button">
					</form>	
					
					<form id="id-search-form" class="form_search_films">
							<input type="text" name="string" value="" style="width: 100%; height: 10%; line-height: 2; margin-left: -36%;">
					</form>
					<div class="button_search" id="id-button-search" value="buscar"> </div>
			</div>
					<div class="search_films_result" id="id-search-films" > 
			</div>
		</div> 
	</div>
</body>
	<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
	<script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
	<script src="js/LOC.js"></script>
	<script src="js/LOC.ui.js"></script>
	<script src="js/actions/LOC.actions.film.js"></script>
</html>