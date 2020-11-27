<?php
    require '../config.php';
    $username = $_POST["username"];
    $tsql = "SELECT * FROM [dbo].[Matches]
        WHERE Username = '$username'";
    $getResults= sqlsrv_query($conn, $tsql);
    if ($getResults === false) {
        echo (sqlsrv_errors());
    }
    while ($row = sqlsrv_fetch_array($getResults, SQLSRV_FETCH_BOTH)) {
        $team1 = $row['Team1'];
        $team2 = $row['Team2'];
        $location = $row['Location'];
        $date = $row['MatchDate'];
        echo "$team1, $team2, $location, $date";
        echo "";
    }
    sqlsrv_free_stmt($getResults);
?>