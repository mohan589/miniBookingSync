import Ember from 'ember';

export default Ember.Route.extend({
	controllerName: 'rentals',

	model(){
		return this.store.createRecord('rental');
	},

	setupController(controller, model){		
		controller.set('rental', model);	
	},

	renderTemplate(){
		this.render('rentals/new')
	},

	actions:{
		save(newRentalItem){
			newRentalItem.save().then(() => this.transitionTo('rentals'));
		},

		willTransition(){
			this.controller.get('model').rollbackAttributes();
		}
	}
});