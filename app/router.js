import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('rentals', function() {
    this.route('rental-list', { path: '/list' });
    this.route('rental-new', { path: '/new' });
  });

  this.route('bookings', function() {
    this.route('bookings-list');
  });
});

export default Router;
