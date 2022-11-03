<?php
session_start();
function podval (){
  $fl = file_get_contents("php/html/podval.html");
  echo $fl;
}
?>
