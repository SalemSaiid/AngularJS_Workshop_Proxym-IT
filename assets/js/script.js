// JavaScript Document
$(document).ready(function() {
  
	//$.cookieBar();
  
	$('#cookie-bar .closeFlashInfo').on('click', function(){
		$('#cookie-bar a.cb-enable').click();
	});

	setTimeout(function() {
	  	//$("html, body").animate({ scrollTop: 0 }, "slow"); 
		
		// MEDIA QUERY CHECK 
		mediaQueryCheck();
		$(window).resize(function(){
			mediaQueryCheck();
		});

		// MOBILE MAIN MENU
		$('.iconSandwich').on("click", function(){
			$('body').addClass('showOverlayNav');
			if( $('body').attr('id') == "homePage" && window.matchMedia("(max-width: 768px)").matches)
				destroyFullPage();
		});
	
		$('.iconSandwichOff, #mainMenu a').on("click", function(){
			$('body').removeClass('showOverlayNav');
			if( $('body').attr('id') == "homePage" && window.matchMedia("(max-width: 768px)").matches)
				runFullPage();
		});
		// END MOBILE MAIN MENU

		// Detect the active page in main menu
		$('ul#mainMenu li a').on('click', function(){
			$('ul#mainMenu li a.active').removeClass('active');
			$(this).addClass('active');
		});
		
		$( document ).on("click", ".showOverlayNav #logo a", function() {
  			$('body').removeClass('showOverlayNav');
			if( $('body').attr('id') == "homePage" && window.matchMedia("(max-width: 768px)").matches)
				runFullPage();
		});

		$('#logo a').on('click', function(){$('ul#mainMenu li a.active').removeClass('active');$(this).addClass('active');});
		$('div.footerBar a').on('click', function(){$('ul#mainMenu li a.active').removeClass('active');});

	}, 100);
	
	// fix zoom problem on ipad/iphone
	if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
		fixFixedPos();
	    var viewportmeta = document.querySelector('meta[name="viewport"]');
	    if (viewportmeta) {
	        viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0';
	        document.body.addEventListener('gesturestart', function (event) {
	        	event.preventDefault();
	            //viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
	        }, false);
	    }
	}
	

});

function mediaQueryCheck(){
	if (window.matchMedia("(max-width: 768px)").matches) {
	  $('[data-mobilevalue]').each(function(index){
	  		$(this).val( $(this).data('mobilevalue') );
	  });
	} else {
	   $('[data-webvalue]').each(function(index){
	  		$(this).val( $(this).data('webvalue') );
	  });
	}
}

function fixFixedPos(){

	allInput =  'input:not([type=radio], [type=checkbox], [type=file]), textarea, select';

	$(document).on('focus', allInput, function() {
		$('.ngdialog-overlay').addClass('absolute'); // MN
	});

	$(document).on('blur', allInput, function() {
		$('.ngdialog-overlay').removeClass('absolute'); // MN
	});

	// TO test it
	document.addEventListener('focusout', function(e) {window.scrollTo(0, 0)});
}

/**
 * FullPage functions
 */
function runFullPage(){
	
	$('#fullpage').fullpage({
		scrollOverflow: true,
		afterRender: function(){$('footer').addClass('hideBox');},
		onLeave: function(index, nextIndex, direction){if(nextIndex == 3){$('footer').removeClass('hideBox');}else{$('footer').addClass('hideBox');}}
	});
}

function destroyFullPage(){
	$.fn.fullpage.destroy("all");
}

function moveDown(){
	$.fn.fullpage.moveSectionDown();
}


//function loadHomePage(){var screenHeight = $(window).height() - ( $('header').height() + 110  ) ;$('.screen').height(screenHeight);}
