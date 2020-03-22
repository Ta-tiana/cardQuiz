<?php
if($_SERVER['REQUEST_METHOD'] == 'POST') {
  $type = ($_POST['car-type'];
  $year = ($_POST['year'];
  $name = ($_POST['name'];
  $tel = ($_POST['tel'];
    print("Тип: " . $_POST['car-type']);
    print("<br>Год: " . $_POST['year']);
    print("<br>Имя: " . $_POST['name']);
    print("<br>Телефон: " . $_POST['tel']);
  }
?>
