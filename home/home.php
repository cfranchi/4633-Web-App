<!--<script src="./home/home.js"></script>-->
<script src="./searchmatches/searchbyteam.js"></script>
<style>
table, th, td {
  border: 1px solid black;
}
</style>
<div>
    <div id="saved_matches_div"></div>
    <div id="search_matches_div">
        <input type="text" class="textbox" id="team1" name="team1" placeholder="Search by team name"/>
        <button id="search_team_button">search</button>
        <br><br>
        <input type="text" class="textbox" id="location" name="location" placeholder="Search by location"/>
        <button id="search_location_button">search</button>
        <br><br>
        <input type="text" class="textbox" id="month" name="month" placeholder="Search by month"/>
        <button id="search_month_button">search</button>
        <br><br>
    </div>
    <h4>RESULTS</h4>
    <div id="search_results_div">
        <table id="table"></table>
    </div>
</div>
