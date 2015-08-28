BaseController = RouteController.extend({
    layoutTemplate:"ApplicationLayout",
    notFoundTemplate:"404",
    yieldTemplates: {
       'defaultToolbar': {to: 'toolbar'},
       'defaultNavigation': {to: "navigation"}
    }
});
