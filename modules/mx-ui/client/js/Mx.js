Mx = {};

Mx.doAfterRouterLoad = function(callback) {
    Router.onAfterAction(function () {
        window.setTimeout(callback, 0);
    });
};
