import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	daily_rate: DS.attr('string'),
	bookings: DS.hasMany('bookings')
});
