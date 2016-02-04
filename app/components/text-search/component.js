import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ["text-search", "component-listing"],
  textToFind: null,
  textToReplace: null,

  actions: {
    findText() {
      $('.text-search .component-container p').blast({delimiter: "word", generateValueClass: true});
      var createdClass = '.blast-word-' + this.textToFind;
      $(createdClass).css('color', 'red');
    },

    replaceText() {
      var createdClass = '.blast-word-' + this.textToFind;
      $(createdClass).text(this.textToReplace);
      $(createdClass).css('color', 'green');
    }
  }
});
