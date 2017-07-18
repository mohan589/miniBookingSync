import Ember from 'ember';

export default Ember.Controller.extend({
    newRentalModel: {},
    actions:{
        save(){
            let model = this.store.createRecord('rental', this.get('newRentalModel'))
            this.set('newRentalModel', {})
            model.save().then(()=>{          
                this.transitionToRoute('rentals.show', model)
            })
        },

        edit(){
            this.get('rental').save().then(() => {
                this.transitionToRoute('rentals.list')
            });
        },

        destroyRental(){
            this.get('rental').destroyRecord().then(()=>(
                this.transitionToRoute('rentals.list')
            ));
        }
    }
});