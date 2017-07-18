import Ember from 'ember';

const {Route, set} = Ember;

export default Route.extend({
	controllerName: 'rentals',
	model(params) {
        return this.store.findRecord('rental', params.id);
    },

    serialize: function(model){
	    return {rental_id: model.get('id')};
	},

	setupController(controller, model){
		set(controller, 'rental', model);
	}
});