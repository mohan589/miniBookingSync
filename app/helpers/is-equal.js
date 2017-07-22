import Ember from 'ember';
export default Ember.Helper.extend({
  compute(params, hash){
    return parseInt(params[0]) === parseInt(params[1]);
  }
});
