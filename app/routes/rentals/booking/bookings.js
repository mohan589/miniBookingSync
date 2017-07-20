import Ember from 'ember';

export default Ember.Route.extend({
	controllerName: 'bookings',
	model(params){
		// return this.store.query('rental', {rental_id: params.rental_id});
        // return  this.modelFor('rental').get('bookings');
	}
});