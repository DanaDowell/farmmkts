import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  city: DS.belongsTo('city'),
  dayweek: DS.attr('string')
});
