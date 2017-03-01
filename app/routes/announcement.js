import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      announcements: this.store.findAll('announcement')
    });
  },

  actions: {
    update(announcement, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          announcement.set(key,params[key]);
        }
      });
      announcement.save();
      this.transitionTo('announcement');
    },

    saveAnnouncement(params) {
          var newAnnouncement = this.store.createRecord('announcement', params);
          newAnnouncement.save();
          this.transitionTo('announcement');
     }
   }
});
