import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
	rental: DS.belongsTo('rental'),
	start_at: DS.attr('string'),
	end_at: DS.attr('string'),
	client_email: DS.attr('string'),
	price: DS.attr('number'),
	isStartValid: Ember.computed.notEmpty('start_at'),
	isEndValid: Ember.computed.notEmpty('end_at'),
	isPriceValid: Ember.computed.notEmpty('price'),
	isValid: Ember.computed.and('isStartValid', 'isEndValid', 'isPriceValid'),
	isNotValid: Ember.computed.not('isValid'),

	clientEmail: Ember.computed('client_email', function(){
		return `${this.get('client_email')}`.capitalize();
	})
});
