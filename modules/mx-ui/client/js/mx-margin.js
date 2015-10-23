$.fn.mxMargin = function(args) {
    var Defaults = {
        'margin-top': 0,
        'margin-bottom': 0,
        'margin-left': 0,
        'margin-right': 0,
    };
    args = mxDefault(Defaults, args);
    $element = $(this);

    if (args['margin-top'] !== 0) {
        $element.css({
            'margin-top': args['margin-top']
        });
    }

    if (args['margin-bottom'] !== 0) {
        $element.css({
            'margin-bottom': args['margin-bottom']
        });
    }

    if (args['margin-left'] !== 0) {
        $element.css({
            'margin-left': args['margin-left']
        });
    }

    if (args['margin-right'] !== 0) {
        $element.css({
            'margin-right': args['margin-right']
        });
    }
};
