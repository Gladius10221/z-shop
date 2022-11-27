<?php
session_start();
if (isset($_POST['name'])) {

$name = $_POST['name'];
$mail = $_POST['mail'];
$password = $_POST['password'];
$mail_us = explode('@', "$mail");
$_SESSION['mail'] = $mail_us[0];
$_SESSION['mail1'] = $mail;
$_SESSION['name'] =  $name;
$_SESSION['password'] = $password;

if(stristr($mail, '@') === FALSE or stristr($mail, '.') === FALSE){
  $mae = 2;
}

if ($name == '' or $mail == '' or $password == ''){
  if ($name == ''){
    $nae = 1;
  }
  if ($mail == ''){
    $mae = 1;
  }
  if ($password == ''){
    $pae = 1;
  }
}

if ($nae != 1 and $mae != 1 and $pae != 1 and $mae != 2){
  $dirs = $_SERVER['DOCUMENT_ROOT'];
  require "$dirs/php/registration_system/registration.php";
}

    $result = array(
      'nae' => $nae,
      'mae' => $mae,
      'pae' => $pae,
    	'name' => $name,
      'mail' => $mail,
      'password' => $password
    );

    // Переводим массив в JSON
    echo json_encode($result);
}

?>
