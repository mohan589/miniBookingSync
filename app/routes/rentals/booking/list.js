import Ember from 'ember';

export default Ember.Route.extend({
	rental: function() {
		rental = this.modelFor('rental');
		
		return {
			rental: rental
		}
	}
});