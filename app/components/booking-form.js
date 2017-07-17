import Ember from 'ember';

const BookingForm = Ember.Component.extend({
	actions:{
		save(){
			this.attrs.save();
		}
	}
});

BookingForm.reopenClass({
  positionalParams: 'rental',
});

export default BookingForm;