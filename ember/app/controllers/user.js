import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    createTodo: function() {
      var title = this.get('newTitle');
      if (!title.trim()) { return; }

      // Commented out because I don't have the rails backend
      //  setup yet to create a todo.
      // var todo = this.store.createRecord('todo', {
      //   title: title
      // });

      this.set('newTitle', '');

      // todo.save();
    }
  }
});
