import Ember from 'ember';

export default Ember.Controller.extend({
    // rentals: [],
    // bookings: [],
    // booking: null,
    newBookingModel: {},

    actions:{
        save(){
            // let localBook = this.get('booking');
            
            var localBook = this.store.createRecord('booking', {});
              localBook.start_at = this.get('booking').start_at;
              localBook.end_at = this.get('booking').end_at;
              localBook.price = this.get('booking').price;
              localBook.client_email = this.get('booking').client_email;
            
            let rental = this.store.findRecord('rental', parseInt(this.get('booking').rental_id));
            rental.then((rentalData) => {
                rentalData.get('bookings').
                addObject(localBook);
                rentalData.save().then(()=>{
                    this.transitionToRoute('rentals.list');
                });
            });

            // const rental = this.get('rental');
            // rental.get('bookings').addObject(localBook);
            // rental.save();

            // const post = this.get('rental');
              
            //   localBook.set('rental', post);
            //   localBook.save().then(() => {
            //     this.transitionTo('post', post);
            //   });
        }
    }
});
