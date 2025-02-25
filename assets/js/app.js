(function($) {	


//–––––––––––––––––––––––––––––––––––––––––––––––––––––– DOCUMENT READY


document.addEventListener("DOMContentLoaded", function () {		
	
	
	PageLoadFunctions();
	
	
	//––CLICK FUNCTIONS
	
	
	//Revert page back to beginning
	$(document).on('click', 'body.page-scrolled .page-wrap#home-page .logo-column img.logo', function(e) {
		pageScrolledUp();
	});
	
});


//–––––––––––––––––––––––––––––––––––––––––––––––––––––– SITE FUNCTIONS


//––PAGE LOAD CONSTANTS

function PageLoadFunctions() {	
	
	//Media Lazyloading
	mediaLazyloading();	

	//Mousewheel Function (to trigger page scroll on desktop)
	$(document).on('wheel', function(event) {
		let deltaY = event.originalEvent.deltaY;
		
		if (Math.abs(deltaY) > 27) { // Adjust sensitivity
			if (deltaY > 0) {
				pageScrolledDown();
			} else {
				pageScrolledUp();
			}
			event.preventDefault();
		}
		
	});
	
	//Touch Functions (to trigger page scroll on mobiles)
	let startY = 0;
	
	$(document).on('touchstart', function(event) {
		startY = event.originalEvent.touches[0].clientY;
	});
	
	$(document).on('touchmove', function(event) {
		let endY = event.originalEvent.touches[0].clientY;
		if (Math.abs(startY - endY) > 20) { // Adjust threshold
			
			pageScrolledDown();
			
		}
	});
	
	$(document).on('touchmove', function(event) {
		let endY = event.originalEvent.touches[0].clientY;
		let deltaY = startY - endY;
	
		if (Math.abs(deltaY) > 20) { // Adjust sensitivity
			if (deltaY > 0) {
				pageScrolledDown();
			} else {
				pageScrolledUp();
			}
		}
		
	});

}

//––PAGE SCROLL FUNCTIONS

function pageScrolledDown() {
	$('body').addClass('page-scrolled');	
}

function pageScrolledUp() {
	$('body').removeClass('page-scrolled');	
}
	
//––LAZYLOADING

function mediaLazyloading() {
	
	var myLazyLoad = new LazyLoad({
		threshold: 500,
		callback_loaded: (el) => {
			
			//Fade out loading overlays
			setTimeout(function() {
				$(el).siblings('.loading-overlay').addClass('hidden');
				$(el).children('.loading-overlay').addClass('hidden');
			}, 50);
			
			setTimeout(function() {
				$(el).siblings('.video-placeholder').addClass('hidden');
				$(el).children('.video-placeholder').addClass('hidden');
			}, 300);
			
		}
	});
	
}

})(jQuery);