import Ember from 'ember';
import FlashMessage from 'ember-cli-flash/flash/object';

export default Ember.Controller.extend({
    newRentalModel: {},
    actions:{
        save(){
            let model = this.store.createRecord('rental', this.get('newRentalModel'))
            this.set('newRentalModel', {})

            model.save().then(function(model){
              this.transitionToRoute('rentals.list');
            }, function(errors){
              Ember.get(this, 'flashes').danger(errors.errors[0].detail);
            });
        },

        edit(){
            this.get('rental').save().then(() => {
                this.transitionToRoute('rentals.list')
            });
        }
    }
});
