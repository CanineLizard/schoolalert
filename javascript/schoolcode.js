$(function () {
    $(document).on('submit', '#schoolcode', function() {
          var Schoolcode = $.trim($("#code").val());
        console.log("Works");
        $.post(databaseHost + '/SchoolCode.php',{schoolcode: Schoolcode}, function(data){
             console.log(data);
             var json = JSON.parse(data);
            
            if(json.success){
                window.location.href = "SchoolAlldone.html";
            }
         });
    });
});