(function($) {	


//–––––––––––––––––––––––––––––––––––––––––––––––––––––– DOCUMENT READY


document.addEventListener("DOMContentLoaded", function () {		
	
	PageLoadFunctions();
	
});


//–––––––––––––––––––––––––––––––––––––––––––––––––––––– SITE FUNCTIONS


//––PAGE LOAD CONSTANTS

function PageLoadFunctions() {	
	
	//Media Lazyloading
	mediaLazyloading();	
	
	//Page Scroll Function
	function pageScrolled() {
		$(document).off('wheel touchmove touchstart', pageScrolled);
		$('body').addClass('page-scrolled');	
	}
	
	//Mousewheel Function (to trigger page scroll on desktop)
	$(document).on('wheel', function(event) {
		console.log(Math.abs(event.originalEvent.deltaY));
		
		if (Math.abs(event.originalEvent.deltaY) > 27) {
			
			pageScrolled();
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
			
			pageScrolled();
			
		}
	});

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