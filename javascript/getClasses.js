function getTeacherClasses(){
     var token = localStorage.getItem("site_token")
     $.post(databaseHost + '/GetClasses.php',{token: token}, function(data){
        var json = JSON.parse(data);
        if(json.success){
            $(".classes").html('');
            var classrooms = json.codes;
            for(i in classrooms){
                $(".classes").append('<button onclick="localStorage.setItem(\'code\',\'' + classrooms[i].code + '\'); window.location.href =\'home.html\';">' + classrooms[i].code + '</button>');
            }
        }
     });
}

setInterval(getTeacherClasses,1500);