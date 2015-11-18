$.fn.mxSheet = function(args) {
    var Defaults = {
        target : "",
    };

    args = $.extend(true, {}, Defaults, args);
    var $element = $(this);
    var $target = $(args.target);

    if (window.location.hash === args.target) {
        $target.addClass("active");
    }

    $element.on("mouseup", function() {
        Router.go(window.location.pathname + args.target);
        $target.addClass("active");
    });


    if (window.history && window.history.pushState) {

        $(window).on('popstate', function() {
            var hashLocation = location.hash;
            var hashSplit = hashLocation.split("#!/");
            var hashName = hashSplit[1];

            if (hashName !== '') {
                var hash = window.location.hash;
                if (hash === '') {
                    $target.removeClass("active");
                }
            }
        });
    }
};
