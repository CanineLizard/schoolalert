$(function () {
    $(document).on('submit', '#loggout', function() {
        $.get(databaseHost + '/loggout.php', function(data){
            var json = JSON.parse(data);
            
            console.log(data);
            if(json.success){
                localStorage.removeItem('site_token');
                window.location.href = "index.html";
           }
        });
    });
});