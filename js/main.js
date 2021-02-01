jQuery(function(){
    jQuery("a").click(function () {
      var elementClick = jQuery(this).attr("href").split('/')[1];
      var destination = jQuery(elementClick).offset().top;
      jQuery('html, body').animate({ scrollTop: destination }, 600);
      return false;
    });
});