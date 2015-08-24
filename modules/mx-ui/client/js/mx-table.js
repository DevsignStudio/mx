$.fn.mxTable = function(args) {
    var Defaults = {
        class : "",
    };

    args = $.extend(true, {}, Defaults, args);
    var $element = $(this);

    // TR each checkbox
    var $tr = $element.find("tbody tr");

    $tr.each(function() {
        var $checker = $(this).find('input[type="checkbox"]');
        var $this = $(this);
        if ($checker.prop("checked")) {
            $(this).addClass("selected");
        }

        $checker.change(function() {
            if ($checker.prop("checked")) {
                $this.addClass("selected");
            } else {
                $this.removeClass("selected");
            }
        });
    });

    // Main Checkbox

    var $mainCheckbox = $("th.th-checkbox");
    var $checker = $mainCheckbox.find('input[type="checkbox"]');
    var $otherCheckbox = $element.find('tbody input[type="checkbox"]');

    $mainCheckbox.on("click", function() {
        if ($checker.prop("checked")) {
            $otherCheckbox.each (function() {
                $(this).prop("checked", true);
                $(this).trigger("change");
            });
        } else {
            $otherCheckbox.each (function() {
                $(this).prop("checked", false);
                $(this).trigger("change");
            });
        }
    });

    $otherCheckbox.each(function() {

        $(this).change(function() {
            if (!$(this).prop("checked")) {
                $checker.prop("checked", false);
                $checker.trigger("change");
            }
        });
    });
};
