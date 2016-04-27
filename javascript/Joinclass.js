$(function () {
    $(document).on('submit', '#joinclass', function() {
          var classcode = $.trim($("#classcodebox").val());
        var token = localStorage.getItem('site_token');
          
         
        $.post(databaseHost + '/Joinclass.php',{classcode: classcode, token: token}, function(data){
            console.log(data);    
            var json = JSON.parse(data);
                
            
            if(json.success){
                localStorage.setItem("code", classcode);
            }
         });
    });
});