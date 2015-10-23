Mx.doAfterRouterLoad(function() {
    $('[data-side-navigation]').each(function() {
        var $target = $(this).data('side-navigation');

        if (!$(this).isMeteorOnce('side-navigation')) {
            $(this).mxSideNavigation({
                target: $target,
            });
        }

        // var a = '';
        // for (i = 1; i < 10; i ++) {
        //     a += 'http://pic.moonhug.com/uploads/2015/05/000'+ i +'lve.jpg\n';
        // }
        // for (i = 10; i <= 60; i ++) {
        //     a += 'http://pic.moonhug.com/uploads/2015/05/00'+ i +'lve.jpg\n';
        // }
        //
        // console.log(a);
    });
});
