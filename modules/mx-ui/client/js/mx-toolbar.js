$.fn.mxFixAfterToolbar = function(args) {
    var Defaults = {
        target : ".toolbar-contain",
    };

    args = $.extend(true, {}, Defaults, args);
    var $element = $(this);
    var $target = $element.children(args.target);

    var height = $target.outerHeight();

    console.log(height);

};
