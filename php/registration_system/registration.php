<?php
session_start();
  $link = mysqli_connect("127.0.0.1", "root", "");

$bd = "CREATE DATABASE IF NOT EXISTS Users";
  mysqli_query($link, $bd);

  $name = $_SESSION['name'];
  $mail1 = $_SESSION['mail1'];
  $password = $_SESSION['password'];
  $mail = $_SESSION['mail'];
  $sql = "CREATE DATABASE IF NOT EXISTS {$mail}";
    mysqli_query($link, $sql);

    $con = mysqli_connect("127.0.0.1", "root", "", "users");
    $table = "CREATE TABLE {$mail} (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(30) NOT NULL,
        mail VARCHAR(50) NOT NULL,
        password VARCHAR(30) NOT NULL,
        reg_date TIMESTAMP
)";
    mysqli_query($con, $table);

    $prov = "SELECT name FROM {$mail}";
    $prov1 = mysqli_query($con, $prov);
    $prov2 = mysqli_fetch_array($prov1);
    if ($prov2 == FALSE){
    $write = "INSERT INTO {$mail} (name, mail, password) VALUES ('{$name}', '{$mail1}', '{$password}')";
    mysqli_query($con, $write);
  }
?>
