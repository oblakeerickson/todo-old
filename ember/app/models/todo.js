import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  user_id: DS.attr('number'),
  user: DS.belongsTo('user')
});
