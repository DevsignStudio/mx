$.fn.mxFixAfterToolbar = function(args) {
    var Defaults = {
        target : ".toolbar-contain",
    };

    args = $.extend(true, {}, Defaults, args);
    var $element = $(this);
    var $target = $element.children(args.target);

    var height = $target.outerHeight();
    var offsetTop = $target.offset().top;
    var breakPoint = height + offsetTop;
    var $position = 0;
    var positionDifference = 0;

    $(window).on("scroll", function() {
        if ($(document).scrollTop() > breakPoint) {

            if ($position > $(document).scrollTop()) {

            } else {
                if ($element.css("position") !== "fixed") {
                    $element.css("position", "fixed");
                    $element.css("top", -(height));
                }
            }
        }

        if ($(document).scrollTop() < breakPoint) {
            $element.css("position", "absolute");
            $element.css("top", 0);
        }

        $position = $(document).scrollTop();
    })

};
