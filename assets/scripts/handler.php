<?php

if ($_POST) {
  $outputData[] = json_decode(file_get_contents('php://input'));
  $outputData[] = $_POST;

  $type = $_POST['type'];
  $year = $_POST['year'];
  $name = $_POST['name'];
  $tel = $_POST['tel'];
}

$f = fopen("date.txt", "a+");
  fwrite($f," \n Тип: $type");
  fwrite($f,"\n Год: $year");
  fwrite($f,"\n Имя: $name");
  fwrite($f,"\n Телефон: $tel");
  fclose($f);

 $file = file_get_contents('data.json');
 $list = json_decode($file,TRUE);
 unset($file);
 $list[] = [$type,  $year ,$name , $tel ];
 file_put_contents('data.json',json_encode($list));
?>
