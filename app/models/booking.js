import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
	rental: DS.belongsTo('rental'),
	start_at: DS.attr('date'),
	end_at: DS.attr('date'),
	client_email: DS.attr('string'),
	price: DS.attr('number'),
	rental_id: DS.attr('number'),
	isStartValid: Ember.computed.notEmpty('start_at'),
	isEndValid: Ember.computed.notEmpty('end_at'),
	isPriceValid: Ember.computed.notEmpty('price'),
	isValid: Ember.computed.and('isStartValid', 'isEndValid', 'isPriceValid'),
	isNotValid: Ember.computed.not('isValid'),

	clientEmail: Ember.computed('client_email', function(){
		return `${this.get('client_email')}`.capitalize();
	}),

	durationChanged: Ember.observer('start_at', 'end_at', function() {
		if (this.get('start_at') != undefined && this.get('end_at') != undefined){
			var date1 = new Date(this.get('start_at'));
	    var date2 = new Date(this.get('end_at'));
	    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
	    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
			console.log(diffDays * parseInt(this.get("rental").get('daily_rate')));
			this.set('price', diffDays * parseInt(this.get("rental").get('daily_rate')))
		}
		else
			return 1;
  })
});
