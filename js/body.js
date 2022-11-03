$(function(){
$(window).resize(function(){
  var lol = $(window).width();
  if (lol < 1100){
    $(".body").css({"display" : "block"})
    $(".body1").css({"display" : "block "});
    $(".box").css({"width" : "80%"});
    $(".button").css({"float" : "left"});
    $('.navbar').css({'margin-top' : '-50px'});
  }
  else if(lol < 600){
    $(".box").css({"width" : "100%"});
  }
})
  function onclick(){
    $(".but").click(function(){
      $(".body").css({"display" : "block"})
      $(".body1").css({"display" : "block "});
      $(".box").css({"width" : "80%"});
      $(".button").css({"float" : "left"});
      $('.navbar').css({'margin-top' : '-50px'});
      clik();
    })
  }

  function clik(){
  $(".but").click(function(){
    $('.navbar').css({'margin-top' : '0px'});
    $(".body1").css({"display" : "grid " , "grid-template-columns" : "27% 27% 27% 27%"});
    $(".body").css({"display" : "flex", "justify-content" : "center"})
    $(".button").css({"float" : "right"});
    onclick()
  })
}
clik();

})
