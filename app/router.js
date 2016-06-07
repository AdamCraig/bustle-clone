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
  this.route('news-page');
  this.route('fashion-page');
  this.route('entertainment-page');
  this.route('lifestyle-page');
});

export default Router;
