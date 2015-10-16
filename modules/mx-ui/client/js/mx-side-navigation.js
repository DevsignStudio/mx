$.fn.mxSideNavigation = function(args) {
    var Defaults = {
        target : ".side-navigation",
    };

    args = $.extend(true, {}, Defaults, args);
    var $element = $(this);
    var $target = $(args.target);

    if($target.has( ".side-overlay" ).length === 0) {
        $target.prepend('<div class="side-overlay"></div>');
    }

    var $targetOverlay = $target.find(".side-overlay");
    var $navlists = $target.find(".nav-list");

    $element.on("mouseup", function() {
        $element.addClass("morphing");
        $target.css({
            "visibility" : "visible"
        });

        $target.toggleClass("active");
        afterInActive();

    });

    $targetOverlay.on("click", function() {
        $target.removeClass("active");
        afterInActive();
    });

	$index = 300;
    $navlists.each(function() {
        $(this).css({
			"z-index" : $index
		});

		$index -= 1;

		if($(this).hasClass("submenu")){
            if(!$(this).isMeteorOnce("side-navigation-submenu") ){
                var $next = $(this).next();
    			var $nextHeight = $next.outerHeight();

    			$next.css({
    				"margin-top": "-"+ $nextHeight + "px",
    				"transition": "margin-top 0.3s ease-in-out",
    				"z-index" : $index
    			});
    			$index -= 1;

    			$(this).prepend('<div class="chevron"><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg></div>');
    			var $chevron = $(this).find(".chevron");

    			if ($next.hasClass("show")) {
    				$next.css({
    					"margin-top":0,
    				});
    				$chevron.addClass("show");
    			}

    			$(this).on("click", function() {


    				if ($next.hasClass("show")) {
    					$next.css({
    						"margin-top": "-"+ $nextHeight + "px"
    					});
    					$next.removeClass("show");
    				} else {
    					$next.css({
    						"margin-top": 0
    					});
    					$next.addClass("show");
    				}
    				
    				$chevron.toggleClass("show");


    			});
            }
		} else {
			$(this).on("click", function(e) {
                var $activeNav = $target.find(".nav-list.active");
				$activeNav.removeClass("active");
				$(this).addClass("active");

				$target.removeClass("active");
				afterInActive();
			});
		}
    });

    function afterInActive() {
        $target.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function() {

            if (!$target.hasClass("active")) {
                $target.css({
                    "visibility" : "hidden"
                });
            }
        });

        if (!$target.hasClass("active")) {
            $element.removeClass("morphing");
        } else {
        }

    }
};
