import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    createUser: function() {
      var name = this.get('newName');
      if (!name.trim()) { return; }

      var user = this.store.createRecord('user', {
        name: name
      });

      this.set('newName', '');

      user.save();
    }
  }
});
