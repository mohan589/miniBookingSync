import Ember from 'ember';

export default Ember.Controller.extend({
    newBookingModel: {},

    actions:{
        save(){
            // let localBook = this.get('booking');
            let rental = null;
            var localBook = this.store.createRecord('booking', {
              start_at: this.get('booking').start_at,
              end_at: this.get('booking').end_at,
              price: this.get('booking').price,
              client_email: this.get('booking').client_email,
              rental_id: this.get('booking').rental_id
            });
            
            rental = this.get('store').findRecord('rental', parseInt(this.get('booking').rental_id));
            rental.then((rentalData) => {
                let booking = rentalData.get('bookings').
                addObject(localBook);
                booking.save().then(()=>{
                    this.transitionToRoute('rentals.list');
                });
            });
        }
    }
});
