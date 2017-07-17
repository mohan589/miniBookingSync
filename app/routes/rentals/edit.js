import Ember from 'ember';

export default Ember.Route.extend({
	controllerName: 'rentals',
	model(params) {
        return this.store.findRecord('rental', params.id);
    }
});