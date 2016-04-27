$(function () {
    $(document).on('submit', '#teachercode', function() {
          var teachercode = $.trim($("#code").val());
          var token = localStorage.getItem("site_token");
         console.log("clicked");
        $.post(databaseHost + '/teachercode.php',{teachercode: teachercode, token: token}, function(data){
            console.log(data);
            var json = JSON.parse(data);
            
            if(json.success){
                window.location.href = "teacherHome.html";
            }
         });
    });
});