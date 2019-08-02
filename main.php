<?php

 //header('Content-Type: text/html; charset=utf-8');



  $phone = preg_replace("/[^0-9]/", '', "84561233999 "); // только цифры

  $first_phone_symbol = substr($phone, 0, 1);

  if($first_phone_symbol == "8" && strlen($phone) == 11) 
  $phone = substr_replace($phone, "7", 0, 1);

  echo "/".$phone."/".$first_phone_symbol;



  echo "<br/>";

// ==============================  Переменная переменных  ================================= //

$a = "Hello";

$Hello = 34;

echo $$a;

// ==============================   Переменная переменных  ================================= //


// ==============================  Рекурсивная функция ================================= //
 
 $arr = array(

 			"Телефоны" => array(	
 								"Xiaomi" => array(
 									"Redmi Note 7" => 5,
 									"Mi note 9" => 2,
 								),
 								"Meizu" => array(
 									"Meizu X6 4GB" => 1,
 								)

 								),
 			"Телевизор" => 11,

 			"Ноутбуки" => array(	
 								"Ультрабуки" => array(

 									"Asus" => array(

 										"VivoBook 15" => 8
 									
 									),
 								)
 						)

 			);


 echo "<pre>";
 print_r($arr);
 echo "</pre>";


 function recursive($arr){

 	static $sum = 0;

 	if(is_array($arr)){

 		foreach ($arr as $value) {

 				recursive($value);
 				/*
 				echo "<pre>";
 			 	print_r($value);
 			 	echo "</pre>";*/
 		}

 	}
 	else{ // считаем сумму
 		$sum += $arr;
  	}

  	return $sum;
 }


 $res = recursive($arr);

 echo $res;


// ==============================  Рекурсивная функция ================================= //


?>
