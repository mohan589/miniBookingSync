import Ember from 'ember';

export default Ember.Route.extend({
	controllerName: 'bookings',

	model() {
		return {};
	},

	rental(){
		return this.modelFor('rental');
	}

	// renderTemplate() {
	// 	this.render('post.comment.new', { into: 'application' });
	// },
});