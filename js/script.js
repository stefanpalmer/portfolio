$(function(){
  new WOW().init();
});

$(function(){
  $("a.links").click(function(event){
    event.preventDefault();
    var section = $(this).attr("href");
    $('html, body').animate({
      scrollTop: $(section).offset().top
    }, 1250);
  });
})
