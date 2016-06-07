import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('story');
  this.route('new-article');
  this.route('article-view', {path: '/article-view/:article_id'});
});

export default Router;
