

    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1639515034479').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1640702723066').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1640878270601').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    jQuery(function() {
        var $module = jQuery('#m-1571938891741').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1571939400475').children('.module');
    });
  
    
    
(function( jQuery ){
  var $module = jQuery('#m-1640710788112').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
(function( jQuery ){
  var $module = jQuery('#m-1640710907555').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
(function( jQuery ){
  var $module = jQuery('#m-1640710151318').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1640797411580').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1640713161446').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1640793129507').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1640793377134').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1640793125716').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1640793113563').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1640793111309').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1640793109147').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1640793100015').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1640793096655').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
(function( jQuery ){
  try {
    var $module = jQuery('#m-1640713110707').children('.module');   
    var navspeed = $module.data('navspeed'),
      autoplaytimeout = $module.data('autoplaytimeout'),
      autoplayhoverpause = $module.data('autoplayhoverpause'),
      navlg = $module.data('navlg'),
      navmd = $module.data('navmd'),
      navsm = $module.data('navsm'),
      navxs = $module.data('navxs'),
      collg = $module.data('collg'),
      colmd = $module.data('colmd'),
      colsm = $module.data('colsm'),
      colxs = $module.data('colxs'),
      dotslg = $module.data('dotslg'),
      dotsmd = $module.data('dotsmd'),
      dotssm = $module.data('dotssm'),
      dotsxs = $module.data('dotsxs'),
      marginlg = parseInt($module.data('marginlg')),
      marginmd = parseInt($module.data('marginmd')),
      marginsm = parseInt($module.data('marginsm')),
      marginxs = parseInt($module.data('marginxs'));

    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
    if(mode == 'production') {
      var autoplay = $module.data('autoplay'), 
          loop = $module.data('loop');
    } else {
      var autoplay = 0, 
          loop = 0;
    }

    var initCarousel = function() {
      $module.owlCarousel({
        mouseDrag: false,
        autoplayHoverPause: autoplayhoverpause,
        autoplay: autoplay,
        autoplaySpeed: navspeed,
        autoplayTimeout: autoplaytimeout,
        loop: loop,
        navSpeed: navspeed,
        autoWidth: !1,
        responsiveClass:true,
        responsive:{
          0:{
              items:colxs,
              nav: navxs,
              dots:dotsxs,
              margin: marginxs
          },
          768:{
              items:colsm,
              nav: navsm,
              dots:dotssm,
              margin: marginsm
          },
          992:{
              items:colmd,
              nav: navmd,
              dots:dotsmd,
              margin: marginmd
          },
          1200:{
              items:collg,
              nav: navlg,
              dots:dotslg,
              margin: marginlg
          }
        },
        onInitialized: function () {
          $module.closest('.module-wrap[data-label="Carousel"]').addClass('gf-carousel-loaded');
          jQuery(window).trigger("resize");
        }
      });
    }
    
    // Fix nested carousel bug	
    if ($module.parent().parent().closest('.module-wrap[data-label="Carousel"]').length > 0) {	
        setTimeout(function() {	
            initCarousel();	
        }, 300)	
    } else {	
        initCarousel();	
    }
  } catch(err) {}
})( window.GemQuery || jQuery );
    
    
(function( jQuery ){
  var $module = jQuery('#m-1640795761547').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1640804407433').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
(function( jQuery ){
  var $module = jQuery('#m-1640804522451').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
(function( jQuery ){
  var $module = jQuery('#m-1640804569282').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
(function( jQuery ){
  var $module = jQuery('#m-1640801993391').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
                          (function( jQuery ){
                              try{
                                  if(jQuery().gfV2Lazyload){
                                      var $module = jQuery(window);
                                      $module.gfV2Lazyload({delay:125})
                                  }
                              }catch(err){
                                  console.error(err)
                              }
                          })( window.GemQuery || jQuery );
                      