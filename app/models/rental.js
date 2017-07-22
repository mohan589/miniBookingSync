import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
	bookings: DS.hasMany('booking', { async: true }),
	name: DS.attr('string'),
	daily_rate: DS.attr('number'),
	isNameValid: Ember.computed.notEmpty('name'),
	isDailyRateValid: Ember.computed.notEmpty('daily_rate'),
	
	nameRental: Ember.computed('name', function(){
		return `${this.get('name')}`.capitalize();
	})
});
