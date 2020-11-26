<!--<script src="./home/home.js"></script>-->
<script src="./searchmatches/searchbyteam.js"></script>
<div>
    <div id="saved_matches_div">
        <?php
            require './savedmatches/getsavedmatches.php'
        ?>
    </div>
    <div id="search_matches_div">
        <input type="text" class="textbox" id="team1" name="team1" placeholder="Search by team name"/>
        <button id="search_team_button">search</button>
        <input type="text" class="textbox" id="location" name="location" placeholder="Search by location"/>
        <button id="search_location_button">search</button>
        <input type="text" class="textbox" id="month" name="month" placeholder="Search by month"/>
        <button id="search_month_button">search</button>
    </div>
    <div id="search_results_div">
        RESULTS
    </div>
</div>
