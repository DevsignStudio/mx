// Mx.doAfterRouterLoad(function(){
//     $('.input-select').each(function() {
//         $(this).on('click', function() {
//             $(this).toggleClass('active');
//         })
//      });
//
// });

Mx.doAfterRouterLoad(function() {
    $('select').each(function() {

        if (!$(this).isMeteorOnce('input-select')) {
            $(this).mxSelect();
        }
    });
});
