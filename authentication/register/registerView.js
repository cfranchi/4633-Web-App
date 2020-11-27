$(function() {
    $("#authentication_div").load("./authentication/register/registerView.html"); 
});

$(document).ready(function() {
    $("#register_button").click(function() {
        var username = $("#new_username").val().trim();
        var password = $("#new_password").val().trim();
        if (username != "" && password != "" ){
            $.ajax({
                url: './register/register.php',
                type: 'post',
                data: {
                    username: username,
                    password: password
                },
                success: function(response) {
                    if (response == 0) {
                        $("#registration_success_message").attr("hidden", false)
                    } else {
                        alert("username already exists or timeout occured!");
                    }
                }
            });
        }
    });
});