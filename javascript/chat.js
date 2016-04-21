$(function () {
  var code = 1234;
  $(document).on('submit', '#chatForm', function () {
     var text = $.trim($("#text").val());
     var name = $.trim($("#name").val());
     
      
      if(text != "" && name !="") {
          $.post(databaseHost + '/ChatPoster.php',{text: text, name: name, code: code}, function(data){
                    $(".chatMessages").append(data);
                });
      }else{
          alert("Data missing");
      }
  });  
    
    function getMessages(){
        $.post(databaseHost + '/GetMessages.php', {code: code}, function(data){
            $(".chatMessages").html(data);
        });
    }
    
    setInterval(getMessages,1500);
    
});