/*
$("button").click(function() {
    $(this).toggleClass('buttonClicked');
  });
*/
  $(function() {
    $("button")
      .on("click", function(){
      $(this).addClass('buttonClicked');
    })
      .on("animationend", function(){
      $(this).removeClass('buttonClicked');
    });
	});