import DS from 'ember-data';

const {
	Model,
	attr,
	belongsTo
} = DS

export default Model.extend({
	rental: belongsTo('rental', { async: true }),
	start_at: attr('string'),
	end_at: attr('string'),
	client_email: attr('string'),
	price: attr('number'),
  	
  	isValid: Ember.computed.notEmpty('start_at'),
  	isValid: Ember.computed.notEmpty('end_at'),
  	isValid: Ember.computed.notEmpty('price')
});
