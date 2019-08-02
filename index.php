<?php 
	  header('Content-Type: text/html; charset=utf-8');
	
	  if(isset($_GET["view"])) $view = $_GET["view"];
      else $view = "main";
?>
<!DOCTYPE html>
<html>
  <head>
    <title>Уроки по PHP</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="assets/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/css/style.css" rel="stylesheet">
  </head>
  <body>

    <header>
            <!-- Классы navbar и navbar-default -->
            <nav class="navbar navbar-default">
              <!-- Контейнер -->
              <div class="container-fluid">
                <div class="my-container">
                <!-- Заголовок -->
                <div class="navbar-header">
                  <!-- Кнопка «Гамбургер» -->
                  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-main" aria-expanded="false">
                    <span class=sr-only>Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                  <!-- Бренд или название сайта -->
                  <a class="navbar-brand" href="/">Главная</a>
                </div>
                <!-- Основная часть меню -->
                <div class="collapse navbar-collapse" id="navbar-main">
                
                  <!-- Содержимое основной части -->
                  <ul class="nav navbar-nav">
                    <li class="active"><a href="#">Ссылка 1 <span class="sr-only">(current)</span></a></li>
                    <li><a href="/?view=php_errors">Ошибки</a></li>
                    <li><a href="#">Ссылка 3</a></li>
                    <li><a href="#">Ссылка 4</a></li>
                    <li><a href="#">Ссылка 5</a></li>
                    <!-- Выпадающий список -->
                    <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Раздел <span class="caret"></span></a>
                      <ul class="dropdown-menu">
                        <li><a href="#">Ссылка</a></li>
                        <li><a href="#">Ссылка</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="#">Ссылка</a></li>
                      </ul>
                    </li>
                  </ul>
                  
                </div>
                </div><!-- my-container -->
              </div>
            </nav>
    </header>

    <main>

    	<?php 
    		  include $view.'.php';
    	?>
	<!--
      <div class="my-container">

              <h1>Привет, мир!</h1>

              <div class="flex" id="custom-wrap">

                <div class="block">
                                    <h3>1</h3>
                </div>

                <div class="block">
                                    <h3>2</h3>
                </div>

                <div class="block">
                                    <h3>3</h3>
                </div>

              </div>
      </div>
	-->
    </main>



    <footer class="page-footer font-small indigo">

      <div class="my-container">
          <h1>Футер</h1>
      </div><!-- my-container -->

    </footer>

    

    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
  </body>
</html>