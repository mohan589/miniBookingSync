import Ember from 'ember';

export default Ember.Route.extend({
	controllerName: 'bookings',
	
	model(params){
		return Ember.RSVP.hash({
			booking: this.store.createRecord('booking'),
			rentals: this.store.findAll('rental')
		});
	},

	setupController(controller, model){
		controller.set('rentals', model.rentals);
		controller.set('booking', model.booking);
	},

	renderTemplate(){
		this.render('bookings/new')
	},

	willTransition(){
		this.controller.get('model').rollbackAttributes();
	}
});