$.fn.mxNormalTextField = function(args) {
    var Defaults = {
        guideText : "",
    };

    args = $.extend(true, {}, Defaults, args);
    var $element = $(this);
    var $border = $('<div class="border-line"></div>');
    var $guideText = $('<div class="guide-text"></div>');

    $element.wrap( '<div class="input-textfield"></div>' );
    var $parent = $element.parent();

    $parent.append($border);
    $parent.append($guideText);
};
