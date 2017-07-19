import Ember from 'ember';

export default Ember.Component.extend({	
    actions: {
        save(){
            this.attrs.save();
        },

        edit(){
            this.attrs.edit();
        }
    }
})

// .reopenClass({
//   positionalParams: ['rental']
// });