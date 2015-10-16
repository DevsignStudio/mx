Mx.doAfterRouterLoad(function(){
    $("[data-textfield]").each(function() {
         var $guideText = $(this).data("textfield");

         if (!$(this).isMeteorOnce("textfield")) {
             if ($guideText === undefined) {
                 $(this).mxNormalTextField();
             } else {
                 $(this).mxNormalTextField({
                     guideText :$guideText
                 });
             }
         }
     });
});
