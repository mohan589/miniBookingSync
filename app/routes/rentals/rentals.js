import Ember from 'ember';

export default Ember.Route.extend({
	serialize: function(model){
	    return {rental_id: model.get('id')};
	}
});