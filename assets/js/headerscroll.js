
  $(document).ready(function(){
  $(window).scroll(function(){

  var scroll = $(window).scrollTop();
    if (scroll > 600) {
      $(".header-wrapper").css("background" , "white");
    }
    else{
      $(".header-wrapper").css("background" , "rgba(0,0,0,0)");
      $(".header-wrapper").css("transition" , "background-color 0.5s ease");
    }
  })
})