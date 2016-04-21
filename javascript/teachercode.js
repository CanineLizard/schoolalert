$(function () {
    $(document).on('submit', '#teachercode', function() {
          var teachercode = $.trim($("#code").val());
         console.log("clicked");
        $.post(databaseHost + '/teachercode.php',{teachercode: teachercode}, function(data){
            console.log(data);
            var json = JSON.parse(data);
            
            if(json.success){
                window.location.href = "teacherHome.html";
            }
         });
    });
});