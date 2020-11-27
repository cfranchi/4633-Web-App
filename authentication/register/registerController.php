<?php
    require '../config.php';
    $username = $_POST["username"];
    $password = $_POST["password"];
    $tsql = "INSERT INTO [dbo].[Users] VALUES ('$username', '$password')";
    $getResults = sqlsrv_query($conn, $tsql);
    if ($getResults === false) {
        echo 1;
    } else {
        echo 0;
    }
    sqlsrv_free_stmt($getResults);
?>