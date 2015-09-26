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

    var deviceAgent = navigator.userAgent.toLowerCase();

    var isTouchDevice = Modernizr.touch ||
    (deviceAgent.match(/(iphone|ipod|ipad)/) ||
    deviceAgent.match(/(android)/)  ||
    deviceAgent.match(/(iemobile)/) ||
    deviceAgent.match(/iphone/i) ||
    deviceAgent.match(/ipad/i) ||
    deviceAgent.match(/ipod/i) ||
    deviceAgent.match(/blackberry/i) ||
    deviceAgent.match(/bada/i));

    if (isTouchDevice) {
        $pageCon = $(".page-container");

        $pageCon.each(function() {
            $pageCon.css("overflow", "auto");
        })
    } else {
        $pageCon = $(".page-container");

        $pageCon.each(function() {
            $(this).removeClass("mCustomScrollbar _mCS_1 mCS-autoHide");
            $(this).mCustomScrollbar({
                axis:"y",
                theme:"minimal-dark",
                scrollInertia: 300
            });
        });
    }

});
