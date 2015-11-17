$.fn.mxProgress = function() {
    $element = $(this);
    var $selectMenu = $('<div class="accomplish"></div>');
    var width = $element.data("current");

    if ($element.hasAttr("data-goal")) {
        var goal = $element.data("goal");
        width = parseInt(width) / parseInt(goal);
    }


    $element.prepend($selectMenu);
    $selectMenu.css({
        "transform": "scaleX(" + width + ")",
    });

    $element.attrchange({
        trackValues: true,
        callback: function (event) {

            if (event.attributeName === "data-current") {
                width = event.newValue;
                if ($element.hasAttr("data-goal")) {
                    var goal = $element.data("goal");
                    width = parseInt(width) / parseInt(goal);
                }

                $selectMenu.css({
                    "transform": "scaleX(" + width + ")",
                });
            }
        }
    });
};

$.fn.mxProgressAdd = function(args) {
    var Defaults = {
        target: '',
        value: "0",
    };

    args = $.extend(true, {}, Defaults, args);
    var $element = $(this);
    var $target = $(args.target);

    $element.on("click", function() {
        var currentWidth = $target.attr("data-current");
        var width = parseInt(args.value);

        if ($target.hasAttr("data-goal")) {
            var goal = $target.data("goal");
            width = parseInt(currentWidth) + width;
            if (width > goal) {
                width = goal;
            }
        } else {
            if (width > 100) {
                width = 100;
            }
        }

        $target.attr("data-current", width);
    });
};

$.fn.mxProgressSub = function(args) {
    var Defaults = {
        target: '',
        value: "0",
    };

    args = $.extend(true, {}, Defaults, args);
    var $element = $(this);
    var $target = $(args.target);

    $element.on("click", function() {
        var currentWidth = $target.attr("data-current");
        var width = parseInt(args.value);

        if ($target.hasAttr("data-goal")) {
            var goal = $target.data("goal");
            width = parseInt(currentWidth) - width;
            if (width < 0) {
                width = 0;
            }
        } else {
            if (width < 0) {
                width = 0;
            }
        }

        $target.attr("data-current", width);
    });
};
