Mx.doAfterRouterLoad(function() {
    $("[data-mx-checkbox]").each(function() {
        var $target = $(this).data("mx-checkbox");

        if (!$(this).isMeteorOnce("mx-checkbox")) {
            if ($target === undefined || $target === "") {
                $(this).mxCheckbox();
            } else {
                $(this).mxCheckbox({
                    class : $target
                });
            }
        }
    });
});
