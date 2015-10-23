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
    var stickToTop = false;
    var count = 0;

    $(window).on("scroll", function() {
        window.requestAnimationFrame(function() {
            scrollTop = $(document).scrollTop();
            // console.log(scrollTop);
            if (scrollTop > breakPoint) {

                if ($position > scrollTop) {
                    if ($element.css("position") !== "absolute" && stickToTop === false) {
                        $element.css("position", "absolute");
                        $element.css("top", scrollTop - height);

                    } else {
                        if (($position - scrollTop > 10  && stickToTop === false) ||
                            (positionDifference - scrollTop >= height &&
                            stickToTop === false)) {
                            $element.css("position", "fixed");
                            $element.css("top", 0);
                            stickToTop = true;
                        }
                    }
                    if (positionDifference === 0) {
                        positionDifference = scrollTop;
                    }

                } else {
                    if ($element.css("position") !== "fixed") {
                        if (count <= 0 || scrollTop - $position > 10) {
                            $element.css("position", "fixed");
                            $element.css("top", -(height));
                            positionDifference = 0;
                            stickToTop = false;
                        } else {
                            count -= scrollTop - $position;
                        }

                    } else {
                        if (stickToTop) {
                            $element.css("position", "absolute");
                            $element.css("top", scrollTop);
                            count = height;
                        }

                    }
                }
            }

            if (scrollTop < breakPoint) {
                if (!stickToTop) {
                    $element.css("position", "absolute");
                    $element.css("top", 0);
                }
            }

            if (scrollTop === 0) {
                if (stickToTop) {
                    $element.css("position", "absolute");
                    $element.css("top", 0);
                }
            }

            $position = scrollTop;
        });
    });

};
