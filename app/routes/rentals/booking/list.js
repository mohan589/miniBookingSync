import Ember from 'ember';

export default Ember.Route.extend({	
	rental(){
		return this.modelFor('rental');
	}
});