Mx.doAfterRouterLoad(function() {
    $('.progress-bar.determinate').each(function() {
        if (!$(this).isMeteorOnce('mx-progress-bar')) {
            $(this).mxProgress();
        }
    });

    $('[data-progress-add]').each(function() {

        if (!$(this).isMeteorOnce('mx-progress-bar-add')) {
            $(this).mxProgressAdd({
                target: $(this).data("target"),
                value: $(this).data("progress-add")
            });
        }
    });

    $('[data-progress-sub]').each(function() {

        if (!$(this).isMeteorOnce('mx-progress-bar-sub')) {
            $(this).mxProgressSub({
                target: $(this).data("target"),
                value: $(this).data("progress-sub")
            });
        }
    });
});
