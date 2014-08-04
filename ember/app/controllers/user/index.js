import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    createTodo: function() {
      var title = this.get('newTitle');
      if (!title.trim()) { return; }
      var user_id = this.get('id');
      var todo = this.store.createRecord('todo', {
        title: title,
        user_id: user_id
      });
      this.set('newTitle', '');

      todo.save();
    }
  }
});
