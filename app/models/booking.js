import DS from 'ember-data';

const {
	Model,
	attr
} = DS

export default Model.extend({
	start_at: attr('string'),
	end_at: attr('string'),
	client_email: attr('string'),
	price: attr('number'),
	rental_id: attr('number')
	// rental: belongsTo('rental')
});
