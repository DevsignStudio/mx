Mx.doAfterRouterLoad(function() {
    $('.toolbar.fix-after').each(function() {

        if (!$(this).isMeteorOnce('toolbar-fix-after')) {
            $(this).mxFixAfterToolbar();
        }
    });
});
