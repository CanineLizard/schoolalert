$(function () {
    $(document).on('submit', '#createclass', function() {
          var classcode = $.trim($("#classcode").val());
          var token = localStorage.getItem("site_token");
         console.log("Clicked");
        $.post(databaseHost + '/createnewclass.php',{classcode: classcode, token: token}, function(data){
             console.log(data);
             var json = JSON.parse(data);
            
            if(json.success){
                window.location.href = "teacherHome.html";
            }
         });
    });
});