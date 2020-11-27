function saveResults() {
    for (var i = 0; i < save_button_arr.length; i++) {
        $("#add_button_" + i).click(function() {
            console.log(i);
        });
    }
}