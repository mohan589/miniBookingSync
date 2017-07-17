import Ember from 'ember';

export default Ember.Controller.extend({
    // queryParams: ['rental'],
    newBookingModel: {},
    // rental_obj: null,
    // inti(){
    //     this.rental_obj = this.get('rental');
    // },    

    actions:{
        save(){
        	let model = this.store.createRecord('booking', this.get('newBookingModel'));
        	this.set('newBookingModel', {});
        	model.save().then(() => {
        		this.transitionToRoute('bookings.list', model);
        	});
        }
    }
});