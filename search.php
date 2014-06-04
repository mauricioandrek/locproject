<?php
	$data   =   $_POST["result"];
    $data   =    json_decode("$data",true);
 
    echo 	"tabela : ".$data["table"];
	echo	"\nfiltro: ".$data["filter"];
	echo	"\nstring: ".$data["string"];
		
?>