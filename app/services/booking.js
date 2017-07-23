import Ember from 'ember';

export default Ember.Service.extend({
  rental:null,

  setRental(rental){
    console.log(rental);
    Ember.set(this, 'rental', rental);
  },

  getRental(){
    return Ember.get(this, 'rental');
  }
});
