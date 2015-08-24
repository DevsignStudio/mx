UI.registerHelper("formatDateTime", function(context, options){
    if (context) {
        return moment(context).format('MM/DD/YYYY, hh:mm');
    }
});
