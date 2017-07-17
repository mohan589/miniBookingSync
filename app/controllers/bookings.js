import Ember from 'ember';

export default Ember.Controller.extend({    
    newBookingModel: {},    

    actions:{
        save(){
            // const rental = this.modelFor('rental');
        	let model = this.store.createRecord('booking', this.currentModel);
        	// model.set('rental', rental);
        	model.save().then(() => {
                alert('success');
        		this.transitionToRoute('bookings.list', model);
        	});
        }
    }
});