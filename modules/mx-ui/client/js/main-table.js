Mx.doAfterRouterLoad(function() {
    $("table").each(function() {
        if (!$(this).isMeteorOnce("mx-table")) {
            $(this).mxTable();
        }
    });
});
