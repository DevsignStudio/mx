DocareDoctorController = BaseController.extend({
    layoutTemplate:"ApplicationLayout",
    notFoundTemplate:"404",
    yieldTemplates: {
       'pinkToolbar': {to: 'toolbar'},
       'defaultNavigation': {to: "navigation"}
    }
});
