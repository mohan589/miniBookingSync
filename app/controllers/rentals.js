import Ember from 'ember';

export default Ember.Controller.extend({
    newRentalModel: {},
    actions:{
        save(){
            let model = this.store.createRecord('rental', this.get('newRentalModel'))
            this.set('newRentalModel', {})
            model.save().then(()=>{
                alert('success');
                this.transaitionToRoute('rentals.rental-show', model)
            })
        }
    }
});