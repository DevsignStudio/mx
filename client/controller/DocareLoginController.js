DocareLoginController = BaseController.extend({
    layoutTemplate:"ApplicationLayout",
    notFoundTemplate:"404",
    yieldTemplates: {
       'noToolbar': {to: 'toolbar'},
       'defaultNavigation': {to: "navigation"}
    }
});
