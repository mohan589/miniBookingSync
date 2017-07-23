import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  bookingService: Ember.inject.service('booking'),

  actions:{
    save(){
      this.attrs.save();
    },

    edit(){
        this.attrs.edit();
    },

    onSelectEntityType(rental_id){
      let store = this.get('store');
      store.find('rental',  rental_id).then((rental) => {
          this.get('bookingService').setRental(rental);
      });
      this.get('booking').set('rental_id', rental_id);
    }
  }
});
