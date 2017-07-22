import Ember from 'ember';

export default Ember.Route.extend({
	controllerName: 'bookings',

	model(params){
		// return Ember.RSVP.hash({
		// 	booking: this.store.createRecord('booking'),
		// 	rental: this.store.find('rental', params.rental_id),
		// 	bookings: this.store.find('rental', params.rental_id).get('bookings')
		// });
	},

	setupController(controller, model){
		// Ember.set(controller, 'rental', model.rental);
		// Ember.set(controller, 'bookings', model.bookings);
	}
});
