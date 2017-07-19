import Ember from 'ember';

export default Ember.Route.extend({
	controllerName: 'bookings',
	
	model(){
        var assoc = this.store.find('rental',params.rental_id).then(function(data){
         	data.get('bookings').then(function(c){
         		console.log(c);
         	})
        });
        return assoc;

      //   return[{id:1, start_at: '10-17-2017', end_at: '10-17-2017',
    		// client_email: 'mahn@gmail.com', price: 1000, rental_id: 1},
    		// {id:2, start_at: '10-17-2017', end_at: '10-17-2017',
    		// client_email: 'absc@gmail.com', price: 1020, rental_id: 2},
    		// {id:3, start_at: '10-17-2017', end_at: '10-17-2017',
    		// client_email: 'testing@gmail.com', price: 8000, rental_id: 1},
    		// {id:4, start_at: '10-17-2017', end_at: '10-17-2017',
    		// client_email: 'enUser@gmail.com', price: 5200, rental_id: 3},
    		// {id:5, start_at: '10-17-2017', end_at: '10-17-2017',
    		// client_email: 'absc@gmail.com', price: 1000, rental_id: 1}]
	},

	setupController(controller, model){
		Ember.set(controller, 'bookings', model);
		// controller.set('rental', model.)
	}
});