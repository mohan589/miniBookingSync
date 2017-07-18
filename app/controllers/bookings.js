import Ember from 'ember';

export default Ember.Controller.extend({    
    newBookingModel: {},    

    actions:{
        save(){
            const rental = this.modelFor('rental');
            let model = this.store.createRecord('booking', this.get('model'));
            model.set('rental', rental);
            this.get('model').save().then(() => {
                alert('success');
                this.transitionToRoute('bookings.list', this.get('model'));
            });
        }
    }
});