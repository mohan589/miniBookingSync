import Ember from 'ember';

export default Ember.Route.extend({
	controllerName: 'bookings',
	
	model(){
        // return  this.modelFor('rentals.bookings').get('bookings');
	}
});