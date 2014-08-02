import Ember from 'ember';

var Router = Ember.Router.extend({
  location: TodoENV.locationType
});

Router.map(function() {
  this.route('about');
  this.resource('users', function() {
    this.route('show', { path: ':user_id'});
  });
});

export default Router;
