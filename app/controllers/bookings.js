import Ember from 'ember';

export default Ember.Controller.extend({    
    newBookingModel: {},    

    actions:{
        save(){
            const rental = this.get('rental');
            rental.get('bookings').addObject(this.get('model'));
            // let model = this.store.createRecord('booking', this.get('model'));
            // model.set('rental', rental);
            rantal.save().then(() => {
                alert('success');
                this.transitionToRoute('bookings.list', this.get('model'));
            });
        }
    }
});