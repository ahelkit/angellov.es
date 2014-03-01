// scroll to top
$(window).scroll(function() {
  if($(window).scrollTop() > 200) { 
    $("#backtotop").fadeIn(250);
  } else {  
    $("#backtotop").fadeOut(250);
  }
});

$("body").on("click","#backtotop",function(){
  $("html, body").animate({
    scrollTop: 0
  },1000);
});

//set container height to window height 
$('.header').height(window.innerHeight);


// adds class slotmachine to allow the slotmachine animation to happen.
$('.things').addClass('slotmachine');

// makes smooth scrolling possible
$("a.smooth").click(function() {
  $("html, body").animate({
    scrollTop: $($(this).attr("href")).offset().top + "px"
  }, {
    duration: 1000,
    easing: "swing"
  });
  return false;
});


// moves active link as you scroll down the page
$('#navbar').scrollspy();

// fix navbar to top
var offset = $('#navbar').offset().top;

$(window).on('scroll', function(){
  if ($(window).scrollTop() >= offset){
    $('#navbar').css({'position':'fixed', 'top':0, 'left':0, 'right':0});
  } else {
    $('#navbar').css('position', 'relative');
  }
})

//carousel 
$('.carousel').carousel('pause')

//play audio file using howler.js
var sound = new Howl({
  urls: ['/audio/last_name_audio.mp3', '/audio/last_name_audio.ogg']
});




