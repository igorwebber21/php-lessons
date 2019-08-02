<?php



// ============================== типы данных ============================== //
echo "<br/>";

$number = 23; // 1. integer
$fruit = "apple"; // 2. string
$number2 = 23.5; // 3. также известные как "float", "double" или "real"
$is_auth = true; // 4. boolean

echo gettype($is_auth);
echo "<br/>";
var_dump($array);

$array = array("foo" => "bar",	"bar" => "foo"); // 5. array

// 6. class
class foo 
{
    function do_foo()
    {
        echo "<br/>Вывод метода класса foo."; 
    }
}

$bar = new foo;
$bar->do_foo();


// 7. Функции обратного вызова (callback-функции)

// Пример callback-функции
function my_callback_function() {
    echo '<br/>Вывод текста из callback-функции';
}

// Простой callback
call_user_func('my_callback_function');
my_callback_function();

$null_var;
echo '<br/>';
var_dump($null_var);

// 8. Iterable - псевдотип, введенный в PHP 7.1
// 9. Resource - это специальная переменная, содержащая ссылку на внешний ресурс.  (к примеру БД)
// 10. null - присвоена константа NULL, не было присвоено никакого значения, была удалена с помощью unset()

// ============================== типы данных ============================== //



// ============================== переменые и констакты ============================== //
echo "<br/>";
define("NAME", "Igor");
const SURNAME = "Klimenko";
echo NAME." - ".SURNAME;
// ============================== переменые и констакты ============================== //



// ==============================  Переменная переменных  ================================= //
echo "<br/>";
$a = "Hello";
$Hello = 34;
echo $$a;
// ==============================   Переменная переменных  ================================= //



// ==============================  Меняем 8 на 7, где 11 символов   ================================= //
  echo "<br/>";

  $phone = preg_replace("/[^0-9]/", '', "84561233999 "); // только цифры

  $first_phone_symbol = substr($phone, 0, 1);

  if($first_phone_symbol == "8" && strlen($phone) == 11) 
  $phone = substr_replace($phone, "7", 0, 1);

  echo "/".$phone."/".$first_phone_symbol;

  echo "<br/>";
// ==============================  Меняем 8 на 7, где 11 символов   ================================= //

?>
