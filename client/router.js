BaseController = RouteController.extend({
    layoutTemplate:"ApplicationLayout",
    notFoundTemplate:"404",
    yieldTemplates: {
       'defaultToolbar': {to: 'toolbar'},
       'defaultNavigation': {to: "navigation"}
    },
});

// Router.route("/", {
//     path: '/documents',
//     controller: 'BaseController'
// });

Router.route('/', {
    controller: 'BaseController',
    template: 'indexLayout'
});

Router.route('/ui/button', {
    controller: 'BaseController',
    template: 'uiButtonLayout'
});

Router.route('/ui/icon-toggle', {
    controller: 'BaseController',
    template: 'uiIconToggleLayout'
});

Router.route('/ui/color', {
    controller: 'BaseController',
    template: 'uiColorLayout'
});

Router.route('/ui/sheet', {
    controller: 'BaseController',
    template: 'uiSheetLayout'
});

Router.route('/ui/cards', {
    controller: 'BaseController',
    template: 'uiCardsLayout'
});

Router.route('/ui/checkbox', {
    controller: 'BaseController',
    template: 'uiCheckboxLayout'
});

Router.route('/ui/table', {
    controller: 'BaseController',
    template: 'uiTableLayout'
});

Router.route('/ui/textfield', {
    controller: 'BaseController',
    template: 'uiTextfieldLayout'
});

// Router.route("/templates/landing", function() {
//     if (this.ready()) {
//         this.layout("layout1");
//         this.render("templatesLandingLayout");
//     }
// });
