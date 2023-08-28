<?php
$apiKey = '52d253dc61db2d84df4a997aaa57c63c';
$city = $_GET['city'];

$apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=$city&appid=$apiKey";

$response = file_get_contents($apiUrl);

echo $response;
?>
