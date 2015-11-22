$.fn.mxSheet = function(args) {
    var Defaults = {
        target : "",
        on: "mouseup focus",
        action: function(){

        },
    };

    args = $.extend(true, {}, Defaults, args);
    var $element = $(this);
    var $target = $(args.target);

    if (window.location.hash === args.target) {
        $target.addClass("active");
    }

    $element.on(args.on, function() {
        args.action();
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


$.fn.mxCalendarSheet = function() {
    var num = 1;

    for (count = 1; ; count++) {
        if ($("#calendar-"+count).length === 0) {
            break;
        } else {
            num = count;
        }
    }

    $target = $('<div class="sheet" id="calendar-'+ num +'"></div>');
    $targetInner = $('<div class="sheet-inner" id="calendar-inner-'+ num +'"></div>');

    $("body").append($target);
    $target = $("body").children("#calendar-1");
    $target.append($targetInner);

    $(this).mxSheet({
        target: '#calendar-'+ num,
    });

    $(this).Zebra_DatePicker({
        always_visible: $('#calendar-inner-'+ num),
        show_select_today: false,
    });

    $('.dp_daypicker, .dp_footer').bind('click', function() {
        // $('.sheet').removeClass('active');
        history.back()
        // $('.zbc').removeClass('active');
    });

};
