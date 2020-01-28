$(document).ready(function(){



	const menuPanels = document.querySelectorAll(".menu-panel")
	const scrollspiesList = document.querySelector("#scrollspies ul")
	console.log(menuPanels)


	menuPanels.forEach(element => {
		let listItem = document.createElement("li")
		let anchor = document.createElement("a")
		let textSpan = document.createElement("span")
		let circleSpan = document.createElement("span")
		circleSpan.classList.add("circle")
		anchor.append(textSpan)
		anchor.append(circleSpan)
		textSpan.innerHTML = element.attributes[0].value
		anchor.href= `#${element.attributes[0].value}`
		listItem.append(anchor)
		scrollspiesList.append(listItem)
	})

	const scrollspies = document.querySelectorAll("#scrollspies li")
	console.log(scrollspies)
	window.addEventListener('scroll', () => {
		menuPanels.forEach( (panel, index) => {

			if((window.scrollY >= panel.offsetTop || window.scrollY == panel.offsetTop - 1) && window.scrollY <= panel.offsetTop + panel.offsetHeight){
				panel.classList.add("active")
				scrollspies[index].classList.add("active")
			} else {
				panel.classList.remove("active")
				scrollspies[index].classList.remove("active")
			}
			if(window.scrollY >= panel.offsetTop + panel.offsetHeight || window.scrollY >= panel.offsetTop + panel.offsetHeight){
				panel.classList.remove("active")
				scrollspies[index].classList.remove("active")
			}

		})
	})



	// $(window).on("scroll", function(){
	// 	var window = $(this);
	// 	var scrollTop = window.scrollTop();
	// 	var logo = $(".logo");
	// 	var animatedOffset = 1 - scrollTop/2
	// });







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
