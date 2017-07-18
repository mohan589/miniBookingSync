import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('rentals', function() {
    this.route('list', { path: '/list' });
    this.route('new', { path: '/new' });
    this.route('edit', { path: ':id/edit' });
    this.route('show', { path: ':id/show' });
    this.route('bookings', {path: ':rental_id/bookings'});
    this.route('booking', { path: '' }, function(){      
      this.route('new', {path: ':rental_id/booking/new'});
    });
  });
});

export default Router;
