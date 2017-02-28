import Ember from 'ember';

export default Ember.Component.extend({
    addNewAnnouncement: false,
   actions: {
     rentalFormShow() {
       this.set('addNewAnnouncement', true);
     },

     saveAnnouncement() {
        var params = {
          author: this.get('author'),
          content: this.get('content'),
        };
        this.set('addNewAnnouncement', false);
        this.sendAction('saveAnnouncement', params);
      }
    }
  });
