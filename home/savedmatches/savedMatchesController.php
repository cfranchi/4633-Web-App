<?php
class Match {
    public $team1;
    public $team2;
    public $location;
    public $date;

    public function __construct($team1, $team2, $location, $date) {
        $this->team1 = $team1;
        $this->team2 = $team2;
        $this->location = $location;
        $this->date = $date;
    }

    public function returnTeam1() {
        return $this->$team1;
    }

    public function returnTeam2() {
        return $this->$team2;
    }

    public function returnLocation() {
        return $this->location;
    }

    public function returnDate() {
        return $this->date;
    }
}

class Schedule {
    public $matches;

    public function __construct() {
        $this->matches = [];
    }

    public function addMatch($match) {
        $this->matches[] = $match;
    }

    public function returnMatches() {
        return $this->matches;
    }
}

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
    $match = new Match("test", "test1", "tes3", "test4");
    echo $match;
    sqlsrv_free_stmt($getResults);
?>
