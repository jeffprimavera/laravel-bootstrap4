// Initilize Swiper Slider 
var swiper = new Swiper('.swiper-container', {
	loop: true,
});

// Initilize Wow Js
wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();

jQuery(document).ready(function() {
	var offset = 220;
	var duration = 500;
	$(window).scroll(function() {
		if (jQuery(this).scrollTop() > offset) {
			$('.scroll-top-arrow').fadeIn(duration);
		} 
	});

	$('.scroll-top-arrow').click(function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, duration);
		return false;
	})
});

/* ===================================
    blog hover box
    ====================================== */
    $(document).on("mouseenter", ".blog-post-style4 .grid-item", function (e) {
        $(this).find("figcaption .blog-hover-text").slideDown(300);
    });
    $(document).on("mouseleave", ".blog-post-style4 .grid-item", function (e) {
        $(this).find("figcaption .blog-hover-text").slideUp(300);
    });
    /* ===================================
    End blog hover box
    ====================================== */


/* Custom JS - Smooth Scroll*/
// Custom scrolling speed with jQuery
// Source: github.com/ByNathan/jQuery.scrollSpeed
// Version: 1.0.2

(function($) {

    $(document).ready(function(){
                // $fn.scrollSpeed(step, speed, easing);
                jQuery.scrollSpeed(150, 1000);
    });
    
    jQuery.scrollSpeed = function(step, speed, easing) {
        
        var $document = $(document),
            $window = $(window),
            $body = $('html, body'),
            option = easing || 'default',
            root = 0,
            scroll = false,
            scrollY,
            scrollX,
            view;
            
        if (window.navigator.msPointerEnabled)
        
            return false;
            
        $window.on('mousewheel DOMMouseScroll', function(e) {
            
            var deltaY = e.originalEvent.wheelDeltaY,
                detail = e.originalEvent.detail;
                scrollY = $document.height() > $window.height();
                scrollX = $document.width() > $window.width();
                scroll = true;
            
            if (scrollY) {
                
                view = $window.height();
                    
                if (deltaY < 0 || detail > 0)
            
                    root = (root + view) >= $document.height() ? root : root += step;
                
                if (deltaY > 0 || detail < 0)
            
                    root = root <= 0 ? 0 : root -= step;
                
                $body.stop().animate({
            
                    scrollTop: root
                
                }, speed, option, function() {
            
                    scroll = false;
                
                });
            }
            
            if (scrollX) {
                
                view = $window.width();
                    
                if (deltaY < 0 || detail > 0)
            
                    root = (root + view) >= $document.width() ? root : root += step;
                
                if (deltaY > 0 || detail < 0)
            
                    root = root <= 0 ? 0 : root -= step;
                
                $body.stop().animate({
            
                    scrollLeft: root
                
                }, speed, option, function() {
            
                    scroll = false;
                
                });
            }
            
            return false;
            
        }).on('scroll', function() {
            
            if (scrollY && !scroll) root = $window.scrollTop();
            if (scrollX && !scroll) root = $window.scrollLeft();
            
        }).on('resize', function() {
            
            if (scrollY && !scroll) view = $window.height();
            if (scrollX && !scroll) view = $window.width();
            
        });       
    };
    
    jQuery.easing.default = function (x,t,b,c,d) {
    
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    };
    
})(jQuery);


function setLangEnPage(trigger){
  var urlName = document.location.hostname;
  var prefix = window.location.protocol+'//player.';
  var urlArr = urlName.split('.');
  if (urlArr.length > 2) {
    urlArr.shift();
    urlName = urlArr.join('.');
  }

   $.ajax({
    url: prefix + urlName + '/async/set_language/'+trigger,
    xhrFields: { withCredentials: true }
  }).done(function() {
          if(trigger == 1){
            lang = 'en';
          } else if(trigger == 2){
            lang = 'cn';
          } else if(trigger == 5){
            lang = 'kr';
          } else{
            lang = 'en';
          }
          changeLang(lang);
});
}

function changeLang(trigger){
  if(trigger != ""){
    var expires;
    console.log('TRIGGER: ', trigger);
    var mainDomain =_export_smartbackend.variables.hosts.www.replace(/http:\/\/.+?\./, '')
      var date = new Date();
      date.setTime(date.getTime() + (0.5 * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toGMTString();
      document.cookie = "_lang" + "=" + trigger + expires + ";domain=."+ mainDomain +";path=/";
      if(trigger == 'en'){
        window.location.replace('http://www.slots360.co.uk/');
      } else {
        window.location.replace(_export_smartbackend.variables.hosts.www+'/cn-kr');
      }
  }
}



 /*==============================================================
    video magnific popup
    ==============================================================*/

    $('.popup-youtube, .popup-vimeo, .popup-googlemap').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: true,
        closeBtnInside: false
    });