import Ember from 'ember';

var Router = Ember.Router.extend({
  location: TodoENV.locationType
});

Router.map(function() {
  this.route('about');
  this.resource('users', function() {
    this.resource('user', { path: ':user_id'}, function() {
      this.resource('todos');
    });
  });
});

export default Router;
