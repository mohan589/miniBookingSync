import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		// rental = this.modelFor('rental');
		return {
			// rental: rental,
			model: {}
		}
	},

	setupController: function(controller, model) {  
	    controller.set('model', model);
	    // controller.set('rental', rental);
	}
});