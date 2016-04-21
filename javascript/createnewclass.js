$(function () {
    $(document).on('submit', '#createclass', function() {
          var classcode = $.trim($("#classcode").val());
          
         console.log("Clicked");
        $.post(databaseHost + '/createnewclass.php',{classcode: classcode}, function(data){
             console.log(data);
             var json = JSON.parse(data);
            
            if(json.success){
                window.location.href = "teacherHome.html";
            }
         });
    });
});