import Ember from 'ember';

export default Ember.Controller.extend({    
    newBookingModel: {},
    
    // inti(){
    //     this.rental_obj = this.get('rental');
    // },    

    actions:{
        save(){
            const rental = this.modelFor('rental');
        	let model = this.store.createRecord('booking', this.currentModel);
        	model.set('rental', rental);
        	model.save().then(() => {
                alert('success');
        		this.transitionToRoute('bookings.list', model);
        	});
        }
    }
});