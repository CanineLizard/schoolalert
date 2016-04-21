$(function () {
    $(document).on('submit', '#register', function() {
          var firstname = $.trim($("#firstname").val());
          var lastname = $.trim($("#lastname").val());
          var username = $.trim($("#username").val());
          var password = $.trim($("#password").val());
          var rpassword = $.trim($("#rpassword").val());
          var type = $('input[name=type]:checked').val();
          console.log("you clicked me");
        $.post(databaseHost + '/reg.php',{firstname: firstname, lastname: lastname, username: username, password: password, type: type}, function(data){
             console.log("works" + data);
             var json = JSON.parse(data);
            if(json.success){
                window.location.href = "signedup.html";
           }
         });
    });
});