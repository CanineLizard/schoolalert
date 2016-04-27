function getJoinedClasses(){
        var token = localStorage.getItem('site_token');
        $.post(databaseHost + '/GetJoinedClassrooms.php',{token: token}, function(data){
            
            var json = JSON.parse(data);
            
            console.log(data);
            if(json.success){
                $(".joinedclassrooms").html('');
                var classrooms = json.codes;
                for(i in classrooms){
                    $(".joinedclassrooms").append('<button onclick="localStorage.setItem(\'code\',\'' + classrooms[i].code + '\')">' + classrooms[i].code + '</button>');
                }
            }
        });
}