<?php
function navbar(){
  $file = file_get_contents("php/html/navbar.html");
  echo $file;
  $cd = $_SERVER['DOCUMENT_ROOT'];
}
?>
