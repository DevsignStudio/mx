Router.configure({
    layoutTemplate:"ApplicationLayout",
    notFoundTemplate:"404",
});

Router.route("/", function(){
    if (this.ready()) {
        this.render("indexLayout");
    }
});

Router.route("/ui/button", function() {
    if (this.ready()) {
        this.render("uiButtonLayout");
    }
});

Router.route("/ui/icon-toggle", function() {
    if (this.ready()) {
        this.render("uiIconToggleLayout");
    }
});

Router.route("/ui/color", function() {
    if (this.ready()) {
        this.render("uiColorLayout");
    }
});

Router.route("/ui/sheet", function() {
    if (this.ready()) {
        this.render("uiSheetLayout");
    }
});

Router.route("/ui/cards", function() {
    if (this.ready()) {
        this.render("uiCardsLayout");
    }
});

Router.route("/ui/checkbox", function() {
    if (this.ready()) {
        this.render("uiCheckboxLayout");
    }
});

Router.route("/ui/table", function() {
    if (this.ready()) {
        this.render("uiTableLayout");
    }
});

Router.route("/ui/textfield", function() {
    if (this.ready()) {
        this.render("uiTextfieldLayout");
    }
});
