import Ember from 'ember';

export default Ember.Route.extend({
	controllerName: 'bookings',
	model: function() {
		// rental = this.modelFor('rental');
		return {
			// rental: rental,
			model: {}
		}		
	}

	// renderTemplate() {
	// 	this.render('post.comment.new', { into: 'application' });
	// },
});