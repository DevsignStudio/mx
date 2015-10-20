$.fn.mxSelect = function(args) {
    var Defaults = {
        class : "",
    };

    args = $.extend(true, {}, Defaults, args);
    var $element = $(this);
    var $selected = $(this).children("option:selected").first();
    var $allOption = $element.children("option");

    var $tri = $('<i class="mdi mdi-menu-down"></i>');
    var $selectMenu = $('<div class="select-menu"></div>');
    var $defaultText = $('<div class="input-select-label">'+ $selected.text() +'</div>');


    $element.wrap( '<div class="input-select"></div>' );
    var $parent = $element.parent();

    $parent.append($tri);
    $parent.append($selectMenu);
    $parent.append($defaultText);

    $allOption.each(function() {
        var addiClass = "";

        var $temp = $('<div class="menu-item">'+ $(this).text() +'</div>');
        $selectMenu.append($temp);

        if ($(this).is($selected)) {
            addiClass = "selected";
            $temp.addClass(addiClass);
            $selected = $temp;
        }


    })

    var $insertMenu = $selectMenu.children(".menu-item");

    $parent.on("click", function(e) {
        if( e.target == this || $(e.target).is($defaultText) || $(e.target).is($tri)) {
            console.log(e.target);
            $(this).addClass("active");
        } else {
            return;
        }
    });

    $insertMenu.each(function() {
        $(this).on("click", function() {
            $selected.removeClass("selected");
            $(this).addClass("selected");
            $parent.removeClass("active");

            $selected = $(this);
        })
    })

};
