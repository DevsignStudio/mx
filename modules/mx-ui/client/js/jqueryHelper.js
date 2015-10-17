mxDefault = function(Defaults, args) {
    return $.extend(true, {}, Defaults, args);
};

$.fn.hasAttr = function(attr) {
    if ($(this).attr(attr) === undefined || $(this).attr(attr) === false ) {
        return false;
    } else {
        return true;
    }
};

$.fn.isMeteorOnce = function(dataName) {
    var $domElement = $(this);

    if ($domElement.hasAttr("data-once-"+dataName)) {
        return true;
    }
    $domElement.attr("data-once-"+dataName, "");
    return false;
};
