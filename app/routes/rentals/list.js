import Ember from 'ember';

export default Ember.Route.extend({	
	model(params){
		return this.store.findAll('rental');
	},

	setupController(controller, model){
		Ember.set(controller, 'rentals', model);
		controller.set('bookings', model.bookings);
	}
});