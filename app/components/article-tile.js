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
    delete(article) {
      if (confirm("You sure you wanna delete this?")) {
        this.sendAction('destroyArticle', article);
      }
    }
  }
});
