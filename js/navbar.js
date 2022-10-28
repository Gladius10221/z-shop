$(function(){
  $(".menu").mouseover(function(){
    $(".menus").css({"display" : "grid"});
    $(".menu").css({"border" : "1px solid grey"})
  })
  $(".menu").mouseout(function(){
    $(".menus").css({"display" : "none"});
    $(".menu").css({"border" : "none"})
  })
  $(".menus").mouseover(function(){
      $(".menus").css({"display" : "grid"});
      $(".menu").css({"border" : "1px solid grey"})
  })
  $(".menus").mouseout(function(){
      $(".menus").css({"display" : "none"});
      $(".menu").css({"border" : "none"})
  })
})
