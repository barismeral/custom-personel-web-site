/*
* Created by Barış Meral
*   please don't edit here
*
*/
   $('.fb-icon').mouseenter(function(event) {
    
     $('.fb-icon').css(
      {"cursor":"pointer",
         "font-size":50
      });

  });

  $('.fb-icon').mouseleave(function(event) {
    $('.fb-icon').css({
      "cursor": "default",
      "font-size": 40
    });
  });

 $('.ins-icon').mouseenter(function(event) {
    
     $('.ins-icon').css(
      {"cursor":"pointer",
         "font-size":50
      });

  });

  $('.ins-icon').mouseleave(function(event) {
    $('.ins-icon').css({
      "cursor": "default",
      "font-size": 40
    });
  });

  $('.in-icon').mouseenter(function(event) {
    
     $('.in-icon').css(
      {"cursor":"pointer",
         "font-size":50
      });

  });

  $('.in-icon').mouseleave(function(event) {
    $('.in-icon').css({
      "cursor": "default",
      "font-size": 40
    });
  });

  $('.gi-icon').mouseenter(function(event) {
    
     $('.gi-icon').css(
      {"cursor":"pointer",
         "font-size":50
      });

  });

  $('.gi-icon').mouseleave(function(event) {
    $('.gi-icon').css({
      "cursor": "default",
      "font-size": 40
    });
  });

 

 $('.fb-icon').click(function(event) {
window.open("https://www.facebook.com/ronaldowashere", '_blank');
 });

$(".ins-icon").click(function(event) {
window.open("https://www.instagram.com/barismerall",'_blank');
});

$(".in-icon").click(function(event) {
window.open("https://www.linkedin.com/in/bar%C4%B1%C5%9F-meral-8035b516b","_blank");
});

$(".gi-icon").click(function(event) {
  window.open("https://www.github.com/barismeral","_blank");
});