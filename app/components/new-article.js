import Ember from 'ember';

export default Ember.Component.extend({
  addNewArticle: false,
  actions: {
    articleFormShow() {
      this.set('addNewArticle', true);
    },

    save1() {
      var params = {
        title: this.get('title'),
        content: this.get('content'),
        image: this.get('image'),
      };
      this.set('addNewArticle', false);
      this.sendAction('save2', params);
    }
  }
});
