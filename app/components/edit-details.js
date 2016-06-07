import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    updateArticle(article) {
      var params = {
        category: this.get('category'),
        title: this.get('title'),
        image: this.get('image'),
        copy: this.get('copy'),
        author: this.get('author'),
      };
      this.sendAction('updateArticle', article, params);

    }

  }
});
