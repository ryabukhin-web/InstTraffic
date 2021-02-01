jQuery(function () {
    var isadeHeight = jQuery(".aside").height() + 40;
    jQuery(".aside").css('min-height', isadeHeight + 'px');

    jQuery(".title_hide").click(function () {
        jQuery(this).next(".block__body").slideToggle(400, function () {
            jQuery(this).prev(".block__title").children("i").removeClass("fa-angle-up").addClass("fa-angle-down");
            if (jQuery(this).is(':hidden')) {
                jQuery(this).prev(".block__title").children("i").removeClass("fa-angle-up").addClass("fa-angle-down");

            } else {
                //jQuery(this).parent(".block").removeClass("align_self");
                jQuery(this).prev(".block__title").children("i").removeClass("fa-angle-down").addClass("fa-angle-up");

            }
        });
        jQuery(this).parent(".block").toggleClass("align_self");
    });

    /* jQuery(".all_block_regular").click(function () {
        jQuery(this).children(".menu_hide").slideToggle(400, function () {
            if (jQuery(this).is(':hidden')) {
                jQuery(this).prev(".gradient_title").children("i").removeClass("fa-caret-up").addClass("fa-caret-down");
            } else {
                jQuery(this).prev(".gradient_title").children("i").removeClass("fa-caret-down").addClass("fa-caret-up");
            }
        });
    }); */

    jQuery(".all_block").click(function () {
        jQuery(".main__left").slideToggle(0, function () {
            if (jQuery(this).is(':hidden')) {
                jQuery(".fully_opened").css('display', 'table-cell');
            } else {
                jQuery(".fully_opened").css('display', 'none');
            }
        });
    });
    
    var aside = jQuery(".aside").width();
    
    if (aside > 90)
        var count = 1;
    if (aside <= 90)
        var count = 2;
    
    jQuery(".menu_open").click(function () {
        if (count == 1) {
            jQuery("header").animate({
                'width': "+=156px"
            }, 400);
            jQuery("main").animate({
                'width': "+=156px"
            }, 400);
            jQuery(".menu_none").css('display', 'none');
            jQuery(".aside").animate({
                width: 80
            }, 300);
            jQuery(".aside__top").css('margin-bottom', '28px');
            jQuery(".aside__turn > span:first-child").removeClass('fa-angle-left').addClass('fa-angle-right');
            //jQuery(".all_block").removeClass('all_block_regular');
            //jQuery(".menu_hide").css('display', 'none');

            count = 2;
        } else {
            jQuery("header").css('width', 'calc(100% - 256px)');
            jQuery("main").css('width', 'calc(100% - 256px)');
            jQuery(".aside").animate({
                width: 236
            }, 400);
            jQuery(".menu_none").slideDown(500);
            jQuery(".aside__top").css('margin-bottom', '40px');
            jQuery(".aside__turn > span:first-child").removeClass('fa-angle-right').addClass('fa-angle-left');
            //jQuery(".all_block").addClass('all_block_regular');
            //jQuery(".menu_hide").css('display', 'none');
            count = 1;
        }
    });

    jQuery(function () {
        jQuery('.aside__menu a').each(function () {
            var location = window.location.href;
            var link = this.href;
            if (location == link) {
                $(this).addClass('active');
            }
        });
    });
});