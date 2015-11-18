$.fn.mxDialog = function(args) {
    var Defaults = {
        target : "",
    };

    var backCallback = function() {
        var hashLocation = location.hash;
        var hashSplit = hashLocation.split("#!/");
        var hashName = hashSplit[1];

        if (hashName !== '') {
            var hash = window.location.hash;
            if (hash === '') {
                $target.removeClass("active");
            }
        }
    };

    args = $.extend(true, {}, Defaults, args);
    var $element = $(this);
    var $target = $(args.target);
    var $overlay = $('<div class="dialog-overlay"></div>');
    var urlBefore = window.location.pathname;

    $target.prepend($overlay);

    if (window.location.hash === args.target) {
        $target.addClass("active");
    }

    $element.on("mouseup", function() {
        Router.go(window.location.pathname + args.target);
        $target.addClass("active");
    });

    $overlay.on("click", function() {
        $target.removeClass("active");
        Router.go(window.location.pathname);
    });


    if (window.history && window.history.pushState) {
        $(window).on('popstate', backCallback);
    }


};
