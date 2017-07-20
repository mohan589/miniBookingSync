import Ember from 'ember';

export default Ember.Controller.extend({
    newBookingModel: {},

    actions:{
        save(){
            // let localBook = this.get('booking');            
            var localBook = this.store.createRecord('booking', {});
            localBook.start_at = this.get('booking').start_at;
            localBook.end_at = this.get('booking').end_at;
            localBook.rental_id = this.get('booking').rental_id;
            localBook.price = this.get('booking').price;
            localBook.client_email = this.get('booking').client_email;
            this.get('store').findRecord('rental', parseInt(this.get('booking').rental_id))
            .then((data) => {
                let booking = data.get('bookings').
                addObject(this.store.createRecord(localBook));
                booking.save().then(()=>{
                    this.transitionToRoute('rentals.list');
                });
            });
        }
    }
});