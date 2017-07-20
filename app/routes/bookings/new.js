import Ember from 'ember';

export default Ember.Route.extend({
	controllerName: 'bookings',
	
	// model(params){
 //        return this.store.find('rental',params.rental_id);
	// },

	// setupController(controller, model){
	// 	controller.set('booking', model);
	// 	Ember.set(controller, 'rental', this.store.get('rental'));
	// },

	renderTemplate(){
		this.render('bookings/new')
	},

	willTransition(){
		this.controller.get('model').rollbackAttributes();
	}
});