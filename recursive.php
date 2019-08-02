<?php

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