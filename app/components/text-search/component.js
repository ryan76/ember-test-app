import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ["text-search"],
  textToFind: null,
  textToReplace: null,

  actions: {
    findText() {
      var createdClass = '.blast-word-' + this.textToFind;
      $('.text-search .search-container p').blast({delimiter: "word", generateValueClass: true});
      $(createdClass).css('background-color', 'rgba(255, 255, 0, 0.5)');
    },

    replaceText() {
      var createdClass = '.blast-word-' + this.textToFind;
      $(createdClass).text(this.textToReplace);
      $('.text-search .search-container p').blast(false);
    }
  }
});
