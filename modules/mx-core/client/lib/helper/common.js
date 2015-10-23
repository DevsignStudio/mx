UI.registerHelper("formatDateTime", function(context, options){
    if (context) {
        return moment(context).format('MM/DD/YYYY, hh:mm');
    }
});

// Meteor.startup(function(){
//     Push.enabled(true); // Will enable notifications (requires a token...)
// });
