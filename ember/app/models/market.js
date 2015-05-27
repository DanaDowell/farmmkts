import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  dayweek: DS.attr('string'),
  city: DS.belongsTo('city', {async: true})
});
