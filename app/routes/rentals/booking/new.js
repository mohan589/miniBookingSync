import Ember from 'ember';

export default Ember.Route.extend({
	controllerName: 'bookings',
	model() {
		return {};
	},

	rental: function() {
		rental = this.modelFor('rental');
		return {
			rental: rental
		}
	}

	// renderTemplate() {
	// 	this.render('post.comment.new', { into: 'application' });
	// },
});