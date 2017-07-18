import DS from 'ember-data';

const {
	Model,
	attr
} = DS

export default Model.extend({
	rental: DS.belongsTo('rental', { async: true }),
	start_at: attr('string'),
	end_at: attr('string'),
	client_email: attr('string'),
	price: attr('number')
});
