Mx.doAfterRouterLoad(function(){
    $(".ripple").each(function() {
         var $rippleColor = $(this).data("ripple-color");

         if (!$(this).isMeteorOnce("ripple")) {
             if ($rippleColor === undefined) {
                 $(this).mxRipple();
             } else {
                 $(this).mxRipple({
                     rippleColor :$rippleColor
                 });
             }
         }
     });
});
