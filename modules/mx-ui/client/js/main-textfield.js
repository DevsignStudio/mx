Mx.doAfterRouterLoad(function(){
    $("[data-textfield]").each(function() {
         var $guideText = $(this).data("text-field");

         if (!$(this).isMeteorOnce("text-field")) {
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
