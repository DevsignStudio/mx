Mx.doAfterRouterLoad(function() {
    $(".toolbar.fix-after").each(function() {
        var $target = $(this).data("side-navigation");

        if (!$(this).isMeteorOnce("side-navigation")) {
            $(this).mxSideNavigation({
               target : $target,
            });
        }
    });
});
