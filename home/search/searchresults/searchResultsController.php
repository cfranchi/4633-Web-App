<?php
    require 'https://4633-project-webapp.azurewebsites.net/config.php';
    $username = $_POST["username"];
    $team1 = $_POST["team1"];
    $team2 = $_POST["team2"];
    $location = $_POST["location"];
    $date = $_POST["date"];
    $tsql = "INSERT INTO [dbo].[Matches] VALUES ('$username', '$team1', '$team2', '$location', '$date')";
    $getResults = sqlsrv_query($conn, $tsql);
    if ($getResults === false) {
        echo 1;
    } else {
        echo 0;
    }
    sqlsrv_free_stmt($getResults);
?>