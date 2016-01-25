import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ["component-listing"],
  isImageShowing: false,
  actions: {
    imageShow() {
      this.set('isImageShowing', true);
    },
    imageHide() {
      this.set('isImageShowing', false);
    }
  }
});
