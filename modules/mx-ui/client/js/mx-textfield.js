$.fn.mxNormalTextField = function(args) {
    var Defaults = {
        guideText: "",
    };

    args = $.extend(true, {}, Defaults, args);
    var $element = $(this);
    var $border = $('<div class="border-line"></div>');
    var $guideText = $('<div class="guide-text">'+ args.guideText +'</div>');

    $element.wrap( '<div class="input-textfield"></div>' );
    var $parent = $element.parent();

    $parent.append($border);
    $parent.append($guideText);
};


$.fn.mxFloatingTextField = function(args) {
    var Defaults = {
        guideText: "",
    };

    args = $.extend(true, {}, Defaults, args);
    var $element = $(this);
    var $border = $('<div class="border-line"></div>');
    var $guideText = $('<div class="guide-text">'+ args.guideText +'</div>');
    var placeholder = $element.attr("placeholder");
    var $placeholder = $('<div class="input-placeholder">'+ placeholder +'</div>');

    $element.attr("placeholder", "");

    $element.wrap( '<div class="input-floating-field"></div>' );
    var $parent = $element.parent();

    $parent.append($border);
    $parent.append($placeholder);
    $parent.append($guideText);

    if ($element.val() !== "") {
        $placeholder.addClass("active");
    }

    $placeholder.on("click", function() {
        if (!$(this).hasClass("active")) {
            $element.focus();
        }

    });

    $element.on("focus", function() {
        $parent.addClass("active");
        $placeholder.addClass("active");
    });

    $element.on("blur", function() {
        if ($element.val() === "") {
            $placeholder.removeClass("active");
        }
        $parent.removeClass("active");
    });
};
