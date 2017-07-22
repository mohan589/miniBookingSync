import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    save(){
      this.attrs.save();
    },
    onSelectEntityType(rental){
      this.get('booking').set('rental_id', rental);
    }
  }
});
