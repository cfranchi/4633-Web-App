function saveResults(response, save_button_arr) {
    var data = $.parseJSON(response);
    for (var i = 0; i < save_button_arr.length; i++) {
        console.log(i);
        $("#add_button_1").click(function() {
            console.log(data[i])
        });
    }
}
