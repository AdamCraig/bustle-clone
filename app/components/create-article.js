import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveArticle() {
      var params = {
        category: this.get('category'),
        title: this.get('title'),
        image: this.get('image'),
        copy: this.get('copy'),
        author: this.get('author'),
      };
      this.sendAction('saveArticle', params);
    }
  }
});
