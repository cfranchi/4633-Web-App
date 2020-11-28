<?php
    require 'https://4633-project-webapp.azurewebsites.net/config.php';
    $username = $_POST["username"];
    $team1 = $_POST["team1"];
    $team2 = $_POST["team2"];
    $location = $_POST["location"];
    $date = $_POST["date"];
    echo "$username, $team1, $team2, $location, $date";
?>
