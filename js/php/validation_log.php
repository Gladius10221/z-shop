<?php
session_start();
if (isset($_POST['mail1'])) {

$mail = $_POST['mail1'];
$password = $_POST['password1'];

$_SESSION['mail'] =  $mail;

if ($mail == ''){
  $mae = 1;
}
if ($password == ''){
  $pae = 1;
}

    $result = array(
      'mae' => $mae,
      'pae' => $pae,
      'mail' => $mail,
      'password' => $password
    );

    // Переводим массив в JSON
    echo json_encode($result);
}

?>
