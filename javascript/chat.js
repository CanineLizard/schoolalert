$(function () {
  
  $(document).on('submit', '#chatForm', function () {
     var text = $.trim($("#text").val());
     var name = $.trim($("#name").val());
      var code = localStorage.getItem("code");
      console.log(code);
     
      
      if(text != "" && name !="") {
          $.post(databaseHost + '/ChatPoster.php',{text: text, name: name, code: code}, function(data){
                    $(".chatMessages").append(data);
                });
      }else{
          alert("Data missing");
      }
  });  
    
    function getMessages(){
        var code = localStorage.getItem("code");
        $.post(databaseHost + '/GetMessages.php', {code: code}, function(data){
            
            var json = JSON.parse(data);
            var messages = json.messages;
            $(".chatMessages").html('');
            for(i in messages){
                $(".chatMessages").append('<p><b>' + messages[i].name + "</b><br>" + messages[i].text + "</p>");
            }
            
        });
    }
    
    setInterval(getMessages,1500);
    setInterval(getJoinedClasses,1500);
});