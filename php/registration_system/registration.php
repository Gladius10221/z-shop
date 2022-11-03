<?php
session_start();
require "rb/rb.php";
require "bd.php";
$name = $_POST['name'];
$mail = $_POST['mail'];
$password = $_POST['password'];
$mail_us = explode('@', "$mail");
$_SESSION['mail'] = $mail_us[0];
conekt();
?>
<script type="text/javascript">
  location.replace("<?php echo "$cd/index.php";?>")
</script>
