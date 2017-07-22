import Ember from 'ember';

export default Ember.Controller.extend({
    newBookingModel: {},

    actions:{
        save(){
            this.get('booking').save().then((data) => {
              this.transitionToRoute('bookings.list', data.rental_id);
            });
        }
    }
});
