import Ember from 'ember';

export default Ember.Route.extend({
	controllerName: 'bookings',
	model(params, transition){
        return  this.modelFor('rentals.list').get('bookings');
	}
});