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

Router.route('/ui/toggles', {
    controller: 'BaseController',
    template: 'uiTogglesLayout'
});

Router.route('/ui/table', {
    controller: 'BaseController',
    template: 'uiTableLayout'
});

Router.route('/ui/textfield', {
    controller: 'BaseController',
    template: 'uiTextfieldLayout'
});

Router.route('/ui/select', {
    controller: 'BaseController',
    template: 'uiSelectLayout'
});


// docare Router

Router.route('/docare/user-activity', {
    controller: 'BaseController',
    template: 'docareUserActivityLayout'
});

Router.route('/docare/user-activity-2', {
    controller: 'BaseController',
    template: 'docareUserActivity2Layout'
});

Router.route('/docare/user-doctor-profile', {
    controller: 'BaseController',
    template: 'docareUserDoctorProfileLayout'
});

Router.route('/docare/user-doctor-profile-2', {
    controller: 'BaseController',
    template: 'docareUserDoctorProfile2Layout'
});

Router.route('/docare/doctor-profile', {
    controller: 'DocareDoctorController',
    template: 'docareDoctorProfileLayout'
});

Router.route('/docare/patient-profile', {
    controller: 'DocareDoctorController',
    template: 'docarePatientProfileLayout'
});

Router.route('/docare/login-1', {
    controller: 'DocareLoginController',
    template: 'docareLogin1Layout'
});
