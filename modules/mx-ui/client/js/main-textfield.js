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

     $("[data-floating-field]").each(function() {
          var $guideText = $(this).data("floating-field");

          if (!$(this).isMeteorOnce("floating-field")) {
              if ($guideText === undefined) {
                  $(this).mxFloatingTextField();
              } else {
                  $(this).mxFloatingTextField({
                      guideText :$guideText
                  });
              }
          }
      });
});
