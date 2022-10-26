$(function(){

  function onclick(){
    $(".but").click(function(){
      $(".body").css({"display" : "block"})
      $(".body1").css({"display" : "block "});
      $(".box").css({"width" : "80%"});
      $(".button").css({"float" : "left"});
      clik();
    })
  }

  function clik(){
  $(".but").click(function(){
    $(".body1").css({"display" : "grid " , "grid-template-columns" : "27% 27% 27% 27%"});
    $(".body").css({"display" : "flex", "justify-content" : "center"})
    $(".button").css({"float" : "right"});
    onclick()
  })
}
clik();

})
