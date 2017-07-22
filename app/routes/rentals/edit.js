import Ember from 'ember';

export default Ember.Route.extend({
	controllerName: 'rentals',
	model(params) {
        return this.store.findRecord('rental', params.id);
    },

    serialize: function(model){
	    return {rental_id: model.get('id')};
	},

	setupController(controller, model){
		Ember.set(controller, 'rental', model);
	}
});
