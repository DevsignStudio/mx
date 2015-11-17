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


    window.setTimeout(function(){
        if ($element.val() !== "") {
            $placeholder.addClass("active");
        }
    }, 100);


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

$.fn.mxPrefixTextField = function(args) {
    var Defaults = {
        preText: "",
    };

    args = $.extend(true, {}, Defaults, args);
    var $element = $(this);

    var $defaultVal = args.preText;
    $element.keydown(function(e) {
        var oldvalue = $(this).val();
        var field = this;
        setTimeout(function() {
            if (field.value.indexOf($defaultVal) !== 0) {
                $(field).val(oldvalue);
            }
        }, 1);
    });
};
