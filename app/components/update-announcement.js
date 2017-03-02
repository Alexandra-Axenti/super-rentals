import Ember from 'ember';

export default Ember.Component.extend({
  updateAnnouncementForm: false,
  actions: {
    updateAnnouncementForm() {
      this.set('updateAnnouncementForm', true);
    },
    update(announcement) {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
      };
      this.set('updateAnnouncementForm', false);
      this.sendAction('update', announcement, params);
    }
  }
});
