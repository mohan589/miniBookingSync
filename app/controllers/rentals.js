import Ember from 'ember';

export default Ember.Controller.extend({
    newRentalModel: {},
    actions:{
        save(){
            let model = this.store.createRecord('rental', this.get('newRentalModel'))
            this.set('newRentalModel', {})
            model.save().then(()=>{
                alert('success');
                this.transitionToRoute('rentals.show', model)
            })
        },

        edit(){            
            this.store.findRecord(this.get("model").id).then(function(record){
                this.get("model").save();
            });
        }
    }
});