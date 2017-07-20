import Ember from 'ember';

export default Ember.Controller.extend({
    newBookingModel: {},

    actions:{
        save(){
            let model = this.store.createRecord('booking', this.get('newBookingModel'))
            this.set('newBookingModel', {})
            model.save().then(()=>{
                this.transitionToRoute('rentals.list');
            })
        }
    }
});