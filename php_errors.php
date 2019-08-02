<?php

// Выключение протоколирования ошибок
//error_reporting(0);

// Включать в отчет простые описания ошибок
//error_reporting(E_ERROR | E_WARNING | E_PARSE);

// Включать в отчет E_NOTICE сообщения (добавятся сообщения о 
// непроинициализированных переменных или ошибках в именах переменных)
//error_reporting(E_ERROR | E_WARNING | E_PARSE | E_NOTICE);

// Добавлять сообщения обо всех ошибках, кроме E_NOTICE
//error_reporting(E_ALL & ~E_NOTICE);

// Добавлять в отчет все ошибки PHP (см. список изменений)
//error_reporting(E_ALL);

// Добавлять в отчет все ошибки PHP
//error_reporting(-1);

// То же, что и error_reporting(E_ALL);
//ini_set('error_reporting', E_ALL);

error_reporting(-1);

echo $v;

?>