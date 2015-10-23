// Meteor.publish('posts', function() {
//     return Posts.find();
// });
//
// Push.allow({
//     send: function(userId, notification) {
//         // Allow all users to send to everybody - For test only!
//         return true;
//     },
// });

// twilio = Twilio("ACdb67f64ff831fff07a60c72eb1697246", "4606bec5540c03eb81b54741d2e0cd06");
// twilio.sendSms({
//   to:'+60129252858', // Any number Twilio can deliver to
//   from: '', // A number you bought from Twilio and can use for outbound communication
//   body: 'fuck you.' // body of the SMS message
// }, function(err, responseData) { //this function is executed when a response is received from Twilio
//   if (!err) { // "err" is an error received during the request, if any
//     // "responseData" is a JavaScript object containing data received from Twilio.
//     // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
//     // http://www.twilio.com/docs/api/rest/sending-sms#example-1
//     console.log(responseData.from); // outputs "+14506667788"
//     console.log(responseData.body); // outputs "word to your mother."
// } else {
//     console.log("err");
// }
// });

// Nexmo.initialize('dd499887', 'f8c59eb9', 'http', true);
//
// Nexmo.sendTextMessage("NEXMO", "+60129252858", "Hello World");
