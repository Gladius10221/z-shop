$(function(){
  $(".menu").mouseover(function(){
    $(".menus").css({"display" : "grid"});
    $(".png").css({"transform" : "rotate(180deg)"});
  })
  $(".menu").mouseout(function(){
    $(".menus").css({"display" : "none"});
    $(".png").css({"transform" : "rotate(360deg)"});
  })
  $(".menus").mouseover(function(){
      $(".menus").css({"display" : "grid"});
      $(".png").css({"transform" : "rotate(180deg)"});
  })
  $(".menus").mouseout(function(){
      $(".menus").css({"display" : "none"});
      $(".png").css({"transform" : "rotate(360deg)"});
  })

  $(".menu").click(function(){
    $(".menus").css({"display" : "grid"});
    $(".png").css({"transform" : "rotate(180deg)"});
  })
  $(".menu").click(function(){
    $(".menus").css({"display" : "none"});
    $(".png").css({"transform" : "rotate(360deg)"});
  })


$('.registration').click(function(){
  $(".block_reg").css({"display" : "block"});
  $(".block_log").css({"display" : "none"});
})
$('.but_mint').click(function(){
  $(".block_reg").css({"display" : "none"});
})

$('.login').click(function(){
  $(".block_log").css({"display" : "block"});
  $(".block_reg").css({"display" : "none"});
})
$('.but_mint').click(function(){
  $(".block_log").css({"display" : "none"});
})
})
