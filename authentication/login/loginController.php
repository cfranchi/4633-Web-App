<?php
    require '../config.php';
    $username = $_POST["username"];
    $password = $_POST["password"];
    $tsql = "SELECT COUNT(*) AS countquery
        FROM [dbo].[Users] 
        WHERE Username = '$username' AND 
        PlainTextPassword = '$password'";
    $getResults = sqlsrv_query($conn, $tsql);
    if ($getResults === false) {
        echo 2;
    } else {
        $row = sqlsrv_fetch_array($getResults, SQLSRV_FETCH_BOTH);
        $count = $row['countquery'];
        if ($count > 0) {
            echo 0;
        } else {
            echo 1;
        }
    }
    sqlsrv_free_stmt($getResults);
?>