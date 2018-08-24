$(document).ready(function(){

	console.log("Hello from app.js")
	$(window).on("scroll", function(){
		var window = $(this);
		var scrollTop = window.scrollTop();
		var logo = $(".logo");
		var animatedOffset = 1 - scrollTop/2

		//$(".logo").attr("style", "width: calc(420px - " + scrollTop*1.5 + "px);");
    	//$(".logo img").css("opacity", 1 - $(window).scrollTop() / 500);
		console.log(scrollTop);
	});

	$.stellar();



new WOW().init();


	// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          };
        });
      }
    }
  });


});