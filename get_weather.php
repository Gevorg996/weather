<?php
$apiKey = 'your key';
$city = $_GET['city'];

$apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=$city&appid=$apiKey";

$response = file_get_contents($apiUrl);

echo $response;
?>
