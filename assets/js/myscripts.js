$(function(){

var files; // переменная. будет содержать данные файлов

// заполняем переменную данными файлов, при изменении значения file поля
$('input[type=file]').on('change', function(e){
  files = this.files;

  //$('input[type=button]').hide();
  $('input[type=button]').css("textAlign", "left")
  $('input[type=button]').val(e.target.files[0].name);
 // $("#phone").after("<div class='inpt-form'>" + e.target.files[0].name + "</div>");

});



$('#send_file').inputFileText({
    text: 'Добавить резюме'
});


$("#form2").submit(function(){


  var send_file = $("#send_file").val();

  if(send_file == ""){
    $(".form2-res").html("<p style='margin: 20px 0 0 0;'>Загрузите файл с резюме!</p>");
  }

  event.stopPropagation(); // остановка всех текущих JS событий
  event.preventDefault();  // остановка дефолтного события для текущего элемента - клик для <a> тега

  // ничего не делаем если files пустой
  if( typeof files == 'undefined' ) return;

  // создадим данные файлов в подходящем для отправки формате
  var form2 = $("#form2")[0];

  // создадим объект данных формы
  var data = new FormData(form2);

  $.each( files, function( key, value ){
    data.append( key, value );
  });

  // добавим переменную идентификатор запроса
  data.append( 'my_file_upload', 1 );


  //alert($("#phone").val());

  // AJAX запрос
  $.ajax({
    url         : './handler.php',
    type        : 'POST',
    data        : data,
    cache       : false,
    dataType    : 'json',
    // отключаем обработку передаваемых данных, пусть передаются как есть
    processData : false,
    // отключаем установку заголовка типа запроса. Так jQuery скажет серверу что это строковой запрос
    contentType : false,
    // функция успешного ответа сервера
    success     : function( respond, status, jqXHR ){

      // ОК
      if( typeof respond.error === 'undefined' ){
        // файлы загружены, делаем что-нибудь

        // покажем пути к загруженным файлам в блок '.ajax-reply'

        var files_path = respond.files;
        var html = '';
        $.each( files_path, function( key, val ){
           html += val +'<br>';
        } )


        $(".form2-res").html("");
        //alert("ok");
        //$('.ajax-reply').html( html );

        $(".inpt-wrap").html("<h3>Ваше резюме успешно отправлено.</h3>");

        setTimeout(function(){
            $("#openModal").fadeOut(2000);
        }, 2000);

      }
      // error
      else {
        console.log('ОШИБКА: ' + respond.error );
      }
    },
    // функция ошибки ответа сервера
    error: function( jqXHR, status, errorThrown ){
      console.log( 'ОШИБКА AJAX запроса: ' + status, jqXHR );
    }

  });

})




//if($(window).width() < 991){
    $(window).scroll(function() {
      if ($(this).scrollTop() > 125) {
        $(".header-top").addClass("header-top-fixed");
        $(".header-logo a img").addClass("header-logo-fixed");
        $(".header-contacts p, .header-phones p, #header-menu li a").addClass("header-contacts-fixed");
      }
      else{
        $(".header-top").removeClass("header-top-fixed");
        $(".header-logo a img").removeClass("header-logo-fixed");
        $(".header-contacts p, .header-phones p, #header-menu li a").removeClass("header-contacts-fixed");
      }
   });
//}



$(".reviews").click(function(){
        var elementClick = "#reviews-block";
        var destination = $(elementClick).offset().top;
       destination = destination;
        $('html').animate({ scrollTop: destination }, 1000);
        $('body').animate({ scrollTop: destination }, 1000);
        return false;
    });


$(".become-partner").click(function(){
        var elementClick = "#become-partner-block";
        var destination = $(elementClick).offset().top;
       destination = destination - 95;
        $('html').animate({ scrollTop: destination }, 1000);
        $('body').animate({ scrollTop: destination }, 1000);
        return false;
    });


$(".begin-trade").click(function(){

  $("#openModal").fadeIn(200);

});


$(".contacts").click(function(){
        var elementClick = "#contacts-block";
        var destination = $(elementClick).offset().top;
       destination = destination;
        $('html').animate({ scrollTop: destination }, 1000);
        $('body').animate({ scrollTop: destination }, 1000);
        return false;
    });


$(".about").click(function(){
        var elementClick = "#about-block";
        var destination = $(elementClick).offset().top;
       destination = destination - 90;
        $('html').animate({ scrollTop: destination }, 1000);
        $('body').animate({ scrollTop: destination }, 1000);
        return false;
    });

$(".achivment").click(function(){
        var elementClick = "#achivment-block";
        var destination = $(elementClick).offset().top;
       destination = destination;
        $('html').animate({ scrollTop: destination }, 1000);
        $('body').animate({ scrollTop: destination }, 1000);
        return false;
    });


 $(".close").click(function(){

    $(this).parents(".modalWindow").fadeOut(200);
   });


$("#close").click(function(){
    $('.navmenu').offcanvas('hide');
});
/*
  $("#name").focus(function() {
      $("#name").removeClass("borderred");
  });

  $("#email").focus(function() {
      $("#email").removeClass("borderred");
  });

    $("#phone2").focus(function() {
      $("#phone2").removeClass("borderred");
  });

    $("#country").change(function() {

       $("#country").removeClass("borderred");

     });


$("#send-btn").click(function(){

   var user_name = $("#name").val();
   var user_sname = $("#sname").val(); 
   var user_email = $("#email").val();
   var user_phone = $("#phone2").val();
   var user_country = $("#country").val();
   var password = $("#password").val(); 
   var password_repeat = $("#password_repeat").val(); 
   var desk_id = $("#desk_id").val(); 
   var affiliate_id = $("#affiliate_id").val(); 
      
      


   //alert(user_email);

   

     /*alert(user_name);
    alert(user_email);
     alert(user_phone);*/
/*
    var error = "";

    // var phone_pattern = [X, "1", "2", "3", "4", "5", "6", "7", "8", "9"];
     var end_str = user_phone.length;
     //alert(end_str);
     

     if(user_country == ""){
        error =  error + "1";
        $("#country").addClass("borderred");
    }


     for($i=0; $i<end_str; $i++){
        if(user_phone[$i] == '0' || user_phone[$i] == '1' || user_phone[$i] == '2'
          || user_phone[$i] == '3' || user_phone[$i] == '4' || user_phone[$i] == '5'
          || user_phone[$i] == '6' || user_phone[$i] == '7' || user_phone[$i] == '8'
          || user_phone[$i] == '9' || user_phone[$i] == ' ' || user_phone[$i] == '-'
          || user_phone[$i] == '+' || user_phone[$i] == ')' || user_phone[$i] == '('){
          
        }
        else{
           error =  error + "1";
      $("#user_phone").addClass("borderred");
        }
      }
      

     function isValidEmailAddress(emailAddress) {
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          return pattern.test(emailAddress);
       }

    $("#rega-result").html("");

    if(user_name.length < 4 ){

      error =  error + "1";
      $("#name").addClass("borderred");

    }

     if(user_email.length < 4 || !isValidEmailAddress(user_email)){

      error =  error + "1";
      $("#email").addClass("borderred");

    }

     if(user_phone.length < 4 ){

      error =  error + "1";
      $("#phone2").addClass("borderred");

    }



if(error != ""){
        
      }
      else{

       

         $.ajax({
                   url: './',
                   type: 'POST',
                   data: {name: user_name, phone: user_phone, email: user_email, country: user_country,
                    desk_id: desk_id, affiliate_id: affiliate_id, password: password,
                   password_repeat: password_repeat
                   },
                   beforeSend: function(){
                      
                  $("#send-form").append("<p style='color: #fff; margin-top: 20px; text-align: center;'>Идет проверка данных <i class='fa fa-spinner fa-spin'></i></p>");
                  },
                   success: function(res){

                    //alert("ok");
                    
                    setTimeout(function(){

                      $("#form").fadeOut(2000);


                    }, 2000);

                    setTimeout(function(){
                       $(".modalWindow").show();
                     }, 2500);
                      
                       },
                   error: function(){
                        alert("Error!");
                   }
                });
        
}
    


     return false;
});

*/


     /* форма */
   
    $("#form #phone2").focus(function(){
     $(this).removeClass("borderred");
   });
   
   
   
   $("#form").submit(function(){
      var user_phone = $("#form #phone2").val();

  var end_str = user_phone.length;
  

    var wrong_phone = 0;
     for($i=0; $i<end_str; $i++){
        if(user_phone[$i] == '0' || user_phone[$i] == '1' || user_phone[$i] == '2'
          || user_phone[$i] == '3' || user_phone[$i] == '4' || user_phone[$i] == '5'
          || user_phone[$i] == '6' || user_phone[$i] == '7' || user_phone[$i] == '8'
          || user_phone[$i] == '9' || user_phone[$i] == ' ' || user_phone[$i] == '-'
          || user_phone[$i] == '+' || user_phone[$i] == ')' || user_phone[$i] == '('){
          
        }
        else{
          wrong_phone = 1;
          
        }
      }
    
    if(end_str < 6){
      wrong_phone = 1;
    }
    

    
    if(wrong_phone == 1){
      $("#form #phone2").addClass("borderred");
      return false;
    }
    

    
   });
    /* форма */
  
  
  
    
 /* форма 2 */
 
    $("#form2 #phone2").focus(function(){
     $(this).removeClass("borderred");
   });
   
    $("#form2").submit(function(){
      var user_phone = $("#form2 #phone2").val();

  var end_str = user_phone.length;
  

    var wrong_phone = 0;
     for($i=0; $i<end_str; $i++){
        if(user_phone[$i] == '0' || user_phone[$i] == '1' || user_phone[$i] == '2'
          || user_phone[$i] == '3' || user_phone[$i] == '4' || user_phone[$i] == '5'
          || user_phone[$i] == '6' || user_phone[$i] == '7' || user_phone[$i] == '8'
          || user_phone[$i] == '9' || user_phone[$i] == ' ' || user_phone[$i] == '-'
          || user_phone[$i] == '+' || user_phone[$i] == ')' || user_phone[$i] == '('){
          
        }
        else{
          wrong_phone = 1;
          
        }
      }
    
    if(end_str < 6){
      wrong_phone = 1;
    }
    

    
    if(wrong_phone == 1){
      $("#form2 #phone2").addClass("borderred");
      return false;
    }
    

    
   });
 /* форма 2 */




 });
