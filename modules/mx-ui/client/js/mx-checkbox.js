$.fn.mxCheckbox = function(args) {
    var Defaults = {
        class: '',
    };

    args = $.extend(true, {}, Defaults, args);
    var $element = $(this);
    var $ripple = $('<div class="checkbox-ripple"></div>');

    $element.wrap('<div class="mx-checkbox"></div>');
    var $parent = $element.parent();
    var $svg = $('<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path class="mx-checkbox-outline" d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" /><path class="mx-checkbox-box" d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" /></svg>');

    $parent.append($svg);
    $parent.append($ripple);

    if ($element.prop('checked')) {
        $parent.addClass('checked');
    }

    if ($element.prop('disabled')) {
        $parent.addClass('disabled');
    }

    $element.change(function() {
        if (!$element.prop('disabled')) {
            if ($(this).prop('checked')) {
                $parent.addClass('checked');
            } else {
                $parent.removeClass('checked');
            }
        }
    });

    $parent.on('click', function() {
        if (!$element.prop('disabled')) {
            if ($(this).hasClass('checked')) {
                // $(this).removeClass('checked');
                $element.prop('checked', false);
                $element.trigger('change');
            } else {
                // $(this).addClass('checked');
                $element.prop('checked', true);
                $element.trigger('change');
            }

            $ripple.addClass('active');
            $ripple.on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
                $ripple.removeClass('active');
            });
        }
    });
};
