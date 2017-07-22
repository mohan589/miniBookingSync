import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('rentals', function() {
    this.route('list');
    this.route('new');
    this.route('edit', { path: ':id/edit' });
    this.route('show', { path: ':id/show' });

    // this.route('booking', {path: ':rental_id/booking'}, function(){
    //   this.route('list');
    //   this.route('new');
    // });
  });

  this.route('bookings', function(){
    this.route('new');
    this.route('list' ,{ path: 'rentals/:rental_id/bookings_list' });
    this.route('edit', { path: 'rentals/:rental_id/booking/:id/edit' });
    this.route('show', { path: ':id/show' });
  });
});

export default Router;
