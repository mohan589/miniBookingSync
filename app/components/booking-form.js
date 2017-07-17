import Ember from 'ember';

const BookingForm = Ember.Component.extend({
	rental: Ember.computed('params.[]', function(){
    	return this.get('params')[0];
  	}),

  	init:function(){
  		this._super(...arguments);
  		alert(this.get('rental'));
  	}
});

BookingForm.reopenClass({
  positionalParams: 'params',

	didInsertElement(){
		alert("invoked");
	},

	actions:{
		save(){
			this.attrs.save();
		}
	}
});

export default BookingForm;