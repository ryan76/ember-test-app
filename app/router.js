import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('components');
  this.route('search');
  this.route('carousel');
  this.route('svg');
  this.route('canvas');
  this.route('webgl');
});

export default Router;
