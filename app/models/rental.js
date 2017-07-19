import DS from 'ember-data';


const {
	Model,
	attr,
	hasMany
} = DS

export default Model.extend({
	bookings: hasMany('booking', { async: true }),
	name: attr('string'),
	daily_rate: attr('string'),


	isValid: Ember.computed.notEmpty('name')  	
});