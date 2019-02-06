$(document).ready(function(){
  $("button#cat").click(function(){
    $(this).after("<p class='dogresponse'>Woof!</p> <img src='img/dog.jpg' class='dogresponse'></img>")
  });
  $("button#dog").click(function(){
    $(this).after("<p class='catresponse'>Meow!</p> <img src='img/cat.jpg' class='catresponse'></img>")
  });
  $(".dogresponse").click(function(){
    $(".dogresponse").remove();
  });
  $(".catresponse").click(function(){
    $(".catresponse").remove();
  });

});
