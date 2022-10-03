
  $(function() {
    $("button")
      .on("click", function(){
      $(this).addClass('buttonClicked');
    })
      .on("animationend", function(){
      $(this).removeClass('buttonClicked');
    });
	});

 

  VanillaTilt.init(document.querySelectorAll(".tiltElement1"), {
    max:20,
    speed:800,
  
  })

  VanillaTilt.init(document.querySelectorAll(".tiltElement2"), {
    max:20,
    speed:800,
    scale:1.2
  })

  $(document).ready(function()
  {
      $("#cloud1, #cloud2, #cloud3").css("transition", "transform 400ms ease-in-out");
  
      $("#cloud1, #cloud2, #cloud3").hover(    
          // Handler for mouseenter
          function()
          {
              $(this).css("transform", "scale(1.2)");
              $(this).css("color", "red");
          },
          // Handler for mouseleave
          function()
          {
              $(this).css("transform", "scale(1)");
          }
      );
  });

