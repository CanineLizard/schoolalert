$(function () {
    $(document).on('submit', '#schoolcode', function() {
          var Schoolcode = $.trim($("#code").val());
          var token = localStorage.getItem("site_token");
        console.log("Works");
        $.post(databaseHost + '/SchoolCode.php',{schoolcode: Schoolcode, token: token}, function(data){
             console.log(data);
             var json = JSON.parse(data);
            
            if(json.success){
                window.location.href = "SchoolAlldone.html";
            }
         });
    });
});