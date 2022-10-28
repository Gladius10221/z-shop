<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <script type="text/javascript" src = "js/jquery.js"></script>
  <script type="text/javascript" src = "js/body.js"></script>
  <script type="text/javascript" src = "js/navbar.js"></script>
  <link rel="stylesheet" href="/style/style.css">
  <?php
  require "php/podval.php";
  require "php/body.php";
  require "php/navbar.php"
  ?>
  <title>Z-shop</title>
</head>
<body>
  <div class="head">
    <span class = "text">Z-shop</span>
  </div>
  <?php
  echo '<div class = "fig">';
    navbar();
    body();
    echo "</div>";
    podval();
  ?>
</body>
</html>
