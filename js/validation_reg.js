$(function() {
    $(".bt").click(function(e){
      $.ajax({
          url:     "js/php/validation_reg.php",
          type:     "POST",
          dataType: "html",
          data: $('#form').serialize(),
          success: function(r) {
          	result = $.parseJSON(r);
              if (result.nae == 1){
               $('#name').css({'border' : '1px solid red', "box-shadow" : "0 0 10px red"})
               $('.attantion_reg').text("Заповніть всі поля!")
              }else{
                window.error1 = "1";
                $('#name').css({'border' : 'none', "box-shadow" : "none"})
              }
              if (result.mae == 1){
                $('#mail').css({'border' : '1px solid red', "box-shadow" : "0 0 10px red"})
                $('.attantion_reg').text("Заповніть всі поля!")
              }else if (result.mae == 2){
                $('#mail').css({'border' : '1px solid red', "box-shadow" : "0 0 10px red"})
                $('.attantion_reg').text("Введіть коректну пошту")
              }else{
                window.error2 = "1";
                $('#mail').css({'border' : 'none', "box-shadow" : "none"})
              }
              if (result.pae == 1){
                $('#password').css({'border' : '1px solid red', "box-shadow" : "0 0 10px red"})
                $('.attantion_reg').text("Заповніть всі поля!")
              }else{
                window.error3 = "1";
                $('#password').css({'border' : 'none', "box-shadow" : "none"})
              }


              if (window.error1 == 1 && window.error2 == 1 && window.error3 == 1){
                $('#bt').attr('onclick', null);
                $('.bt').click();
                $('#bt').attr('class', null);
              }
      	}
   	});
		}
	);
});
