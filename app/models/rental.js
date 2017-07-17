import DS from 'ember-data';


const {
	Model,
	attr
} = DS

export default Model.extend({
	bookings: DS.hasMany('booking', { async: true }),
	name: attr('string'),
	daily_rate: attr('string')
});