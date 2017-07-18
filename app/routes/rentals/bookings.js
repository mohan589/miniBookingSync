import Ember from 'ember';

export default Ember.Route.extend({
	controllerName: 'bookings',
	
	model(params){
        var assoc = this.store.find('rental',params.rental_id).then(function(data){
         	data.get('bookings').then(function(c){
         		console.log(c);
         	})
        });
        return assoc;
	},

	setupController(controller, model){
		Ember.set(controller, 'booking', model);
	}
});