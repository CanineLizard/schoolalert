
$(function (){ 
  function getClasses(){
        $.get('GetClasses.php', function(data){
            $(".classes").html(data);
        });
    }
});