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
    this.route('booking', { path: ':rental_id' }, function(){
      this.route('list', {path: '/bookings'});
      this.route('new', {path: '/booking/new'});
    });
  });
});

export default Router;
