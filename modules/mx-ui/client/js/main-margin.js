Mx.doAfterRouterLoad(function(){
    $(".toolbar").each(function() {
    	var $height = $(this).outerHeight();
    	var $margin = parseInt($(this).next().css("marginTop"));
        var marginBefore = $(this).next().data("margin-top-before") === undefined ?
                            0 : $(this).next().data("margin-before");

        $(this).next().mxMargin({
            "margin-top" : $height + $margin - parseInt(marginBefore)
        });

        $(this).next().data("margin-top-before",
                            $height + $margin - parseInt(marginBefore));
    });
});
