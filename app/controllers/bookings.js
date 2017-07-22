import Ember from 'ember';

export default Ember.Controller.extend({
    newBookingModel: {},

    actions:{
        save(){
          var _this = this;
            this.get('booking').save({adapterOptions:{rental: _this.get('booking').rental_id}}).then((booking) => {
              _this.transitionToRoute('bookings.list', booking.data.rental_id);
            });
        },

        deleteBooking(booking, rental){
          booking.destroyRecord({ adapterOptions: {booking: booking, rental: rental }});
        },

        edit(){
            this.get('booking').save({adapterOptions:{rental: this.get('rental')}}).then(() => {
                this.transitionToRoute('bookings.list', this.get('rental').id);
            });
        }
    }
});
