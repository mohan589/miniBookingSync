import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    save(){
      this.attrs.save();
    },

    edit(){
        this.attrs.edit();
    },

    onSelectEntityType(rental){
      this.get('booking').set('rental_id', rental);
    }
  }
});
