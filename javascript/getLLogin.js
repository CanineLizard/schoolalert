$(function () {
    $(document).on('submit', '#login', function() {
          var username = $.trim($("#username").val());
          var password = $.trim($("#password").val());
         console.log("Clicked");
        $.post(databaseHost + '/Login.php',{username: username, password: password}, function(data){
             console.log(data);
             var json = JSON.parse(data);
            
            if(json.success && json.type==="school"){
                localStorage.setItem("site_token", json.token);
                window.location.href = "Schoolhome.html";
            }else if(json.success && json.type==="teacher") {
                localStorage.setItem("site_token", json.token);
                window.location.href = "teacherCode.html";
            }else if(json.success && json.type==="student"){
                localStorage.setItem("site_token", json.token);
                window.location.href ="home.html";
            }
         });
    });
});