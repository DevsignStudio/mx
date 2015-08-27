Mx.doAfterRouterLoad(function(){
    $(".toolbar.above, .toolbar.cover").each(function() {
    	var $height = $(this).outerHeight();
    	var $margin = parseInt($(this).next().css("marginTop"));

        $(this).next().mxMargin({
            "margin-top" : $height + $margin
        });
        var parentHeight = $(this).parent().outerHeight();
        $(this).next().css({
        	height: parentHeight - $height + $margin
        });


    });
    $pageCon = $(".page-container");

    $pageCon.each(function() {

        $(this).removeClass("mCustomScrollbar _mCS_1 mCS-autoHide");
        $(this).mCustomScrollbar({
            axis:"y",
            theme:"minimal-dark",
            scrollInertia: 300
        });
    });

});
