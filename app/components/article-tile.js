import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    },
    update(article, params) {
      this.sendAction('update', article, params);
    },
    delete(article) {
      if (confirm("You sure you wanna delete this?")) {
        this.sendAction('destroyArticle', article);
      }
    }
  }
});
