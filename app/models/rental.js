import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
	bookings: DS.hasMany('booking', { async: true }),
	name: DS.attr('string'),
	daily_rate: DS.attr('number'),
	isValid: Ember.computed.notEmpty('name')
});