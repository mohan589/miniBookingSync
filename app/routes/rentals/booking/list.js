import Ember from 'ember';

export default Ember.Route.extend({
	controllerName: 'bookings',

	model(params){
		return this.store.find('rental', params.rental_id).get('bookings');
	},

	setupController(controller, model){
		Ember.set(controller, 'bookings', model);
	},

	actions:{
		deleteRental(rental){
			rental.destroyRecord();
		}
	}
});