Mx.doAfterRouterLoad(function() {
    $('[data-dialog]').each(function() {
        var $dialogTarget = $(this).data('dialog');

        if (!$(this).isMeteorOnce('dialog')) {
            if ($dialogTarget === undefined) {
                $(this).mxDialog();
            } else {
                $(this).mxDialog({
                    target: $dialogTarget,
                });
            }
        }
    });
});
