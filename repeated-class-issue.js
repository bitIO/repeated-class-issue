if (Meteor.isClient) {
  Template.hello.events({
    'click button': function () {
      Session.set('showSecond', true);
    }
  });
  Template.hello.helpers({
    showSecond: function(){
      return Session.get('showSecond');
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
