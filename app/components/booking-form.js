import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions:{
    save(){
      this.attrs.save();
    },

    edit(){
        this.attrs.edit();
    },

    onSelectEntityType(rental_id){
      let store = this.get('store');
      this.sendAction('setRental', store.find('rental',  rental_id));
      this.get('booking').set('rental_id', rental_id);
    }
  }
});
