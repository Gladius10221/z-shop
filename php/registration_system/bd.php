<?php
session_start();
function conekt(){
          $mail = $_SESSION['mail'];
          $link = mysqli_connect("127.0.0.1", "root", "");
          $links = mysqli_connect("127.0.0.1", "root", "", "{$mail}");
          if ($links == false){
            $sql = "CREATE DATABASE {$mail}";
            mysqli_query($link, $sql);
          }
}
 ?>
