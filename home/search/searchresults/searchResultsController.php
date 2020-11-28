<?php
    /*require config.php throws 500 here, so code has been copied over... I have no idea why this happens.
    Similar files such as registerController.php require config perfectly fine.
    I quadruple checked paths, tried absolute paths, copied path from registerController, etc.
    Professor, if you happen to read this comment and know why this might be, please feel free to reach out.
    Cameron Franchi*/
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
    //end config copy
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