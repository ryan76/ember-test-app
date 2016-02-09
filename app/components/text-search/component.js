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
    },

    boldText() {
      var createdClass = '.blast-word-' + this.textToFind;
      $(createdClass).css('background-color', 'white');
      var currentStyle = $(createdClass).css('font-weight');
      if (currentStyle === 'bold') {
        $(createdClass).css('font-weight', 'normal');
      } else {
        $(createdClass).css('font-weight', 'bold');
      }
    },

    italicizeText() {
      var createdClass = '.blast-word-' + this.textToFind;
      $(createdClass).css('background-color', 'white');
      var currentStyle = $(createdClass).css('font-style');
      if (currentStyle === 'italic') {
        $(createdClass).css('font-style', 'normal');
      } else {
        $(createdClass).css('font-style', 'italic');
      }
    },

    underlineText() {
      var createdClass = '.blast-word-' + this.textToFind;
      $(createdClass).css('background-color', 'white');
      var currentStyle = $(createdClass).css('text-decoration');
      if (currentStyle === 'underline') {
        $(createdClass).css('text-decoration', 'none');
      } else {
        $(createdClass).css('text-decoration', 'underline');
      }
    },

    toggleEditMode() {
      var editor = $('.editor');
      var isEditable = editor.attr('contentEditable');
      if (isEditable === 'true') {
        editor.attr('contentEditable', 'false');
      } else {
        editor.attr('contentEditable', 'true');
      }
    }
  }
});
