Mx.doAfterRouterLoad(function() {
    $('[data-sheet]').each(function() {
        var $sheetTarget = $(this).data('sheet');

        if (!$(this).isMeteorOnce('sheet')) {
            if ($sheetTarget === undefined) {
                $(this).mxSheet();
            } else {
                $(this).mxSheet({
                    target: $sheetTarget,
                });
            }
        }
    });

    $('.input-datepicker').each(function() {
        if (!$(this).isMeteorOnce('sheet')) {
            $(this).mxCalendarSheet();
        }
    });
});
