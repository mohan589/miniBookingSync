import Ember from 'ember';

export default Ember.Route.extend({
	controllerName: 'bookings',
	model(params) {
    return Ember.RSVP.hash({
      rental: this.store.findRecord('rental', params.rental_id),
      rentals: this.store.findAll('rental'),
      booking: this.store.peekRecord('booking', params.id)
    });
  },

	setupController(controller, model){
		Ember.set(controller, 'rental', model.rental);
    Ember.set(controller, 'rentals', model.rentals);
    Ember.set(controller, 'booking', model.booking);
	}
});
