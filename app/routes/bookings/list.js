import Ember from 'ember';

export default Ember.Route.extend({
	controllerName: 'bookings',

	model(params){
		return this.store.query('booking', {retal_id: params.rental_id});
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
