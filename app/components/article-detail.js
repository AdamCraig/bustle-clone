import Ember from 'ember';

export default Ember.Component.extend({
  isEditShow: false,
  actions: {
    deleteArticle(article){
      if(confirm('Are you sure you want to delete this?')){
        this.sendAction('deleteArticle', article);
      }
    },
    editShow: function(){
      this.set('isEditShow', true);
    },
    updateArticle(article, params){
      this.sendAction('updateArticle', article, params);
      this.set('isEditShow', false);
    }
  }
});
