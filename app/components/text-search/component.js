import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ["text-search"],
  textToFind: null,
  textToReplace: null,

  actions: {
    findText() {
      $('.text-search').blast({delimiter: "word", generateValueClass: true});
      var createdClass = '.blast-word-' + this.textToFind;
      $(createdClass).css('color', 'red');
    },

    replaceText() {
      var createdClass = '.blast-word-' + this.textToFind;
      $(createdClass).text(this.textToReplace);
    }
  }
});
