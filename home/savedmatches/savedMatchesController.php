<?php
    require 'https://4633-project-webapp.azurewebsites.net/shared/helpers/Match.php';
    require 'https://4633-project-webapp.azurewebsites.net/shared/helpers/Schedule.php';
    $serverName = "4633-project-server.database.windows.net";
    $connectionOptions = array(
        "Database" => "4633-Web-App",
        "Uid" => "clouddev",
        "PWD" => "password1!"
    );
    $conn = sqlsrv_connect($serverName, $connectionOptions);
    if( $conn === false ) {
        die( print_r( sqlsrv_errors(), true));
    };
    $username = $_POST["username"];
    $tsql = "SELECT * FROM [dbo].[Matches]
        WHERE Username = '$username'";
    $getResults= sqlsrv_query($conn, $tsql);
    if ($getResults === false) {
        echo (sqlsrv_errors());
    }
    $schedule = new Schedule();
    while ($row = sqlsrv_fetch_array($getResults, SQLSRV_FETCH_BOTH)) {
        $team1 = $row['Team1'];
        $team2 = $row['Team2'];
        $location = $row['Location'];
        $date = $row['MatchDate'];
        $match = new Match($team1, $team2, $location, $date);
        $schedule.addMatch($match);
    }
    sqlsrv_free_stmt($getResults);
?>