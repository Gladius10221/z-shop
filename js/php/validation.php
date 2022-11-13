<?php

if (isset($_POST['name'])) {

$name = $_POST['name'];
$mail = $_POST['mail'];
$password = $_POST['password'];

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

if(stristr($mail, '@') === FALSE or stristr($mail, '.') === FALSE){
  $mae = 2;
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
