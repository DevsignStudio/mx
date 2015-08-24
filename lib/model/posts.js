Posts = new Mongo.Collection("posts");

var Schema = {};
Schema.Posts = new SimpleSchema({
    text: {
        type: String,
        label: "Text"
    },
    createdAt: {
        type: Date,
        label: "Created At",
    },
});

Posts.attachSchema(Schema.Posts);

Posts.helpers({
    halo : function() {
        return "Hello";
    }
});
