$(function() {
    $(".bt1").click(function(e){
      $.ajax({
          url:     "js/php/validation_log.php",
          type:     "POST",
          dataType: "html",
          data: $('#form1').serialize(),
          success: function(r) {
          	result = $.parseJSON(r);

              if (result.mae == 1){
                $('#mail1').css({'border' : '1px solid red', "box-shadow" : "0 0 10px red"})
                $('.attantion_log').text("Заповніть всі поля!")
              }else{
                window.err1 = "1";
                $('#mail1').css({'border' : 'none', "box-shadow" : "none"})
              }
              if (result.pae == 1){
                $('#password1').css({'border' : '1px solid red', "box-shadow" : "0 0 10px red"})
                $('.attantion_log').text("Заповніть всі поля!")
              }else{
                window.err2 = "1";
                $('#password1').css({'border' : 'none', "box-shadow" : "none"})
              }

              if (window.err1 == 1 && window.err2 == 1){
                $('#bt1').attr('onclick', null);
                $('.bt1').click();
                $('#bt1').attr('class', null);
              }
      	}
   	});
		}
	);
});
