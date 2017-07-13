import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('rentals', function() {
    this.route('rentals', { path: '/list' });
  });

  this.route('bookings', function() {
    this.route('bookings', { path: '/list' });
  });
});

export default Router;
