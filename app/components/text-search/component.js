import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ["text-search"],
  textToFind: null,
  textToReplace: null,
  styleCommand: null,

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

    styleText() {
      var commands = {
        'bold': {
          'style': 'font-weight',
          'value': 'bold'
        },
        'italic': {
          'style': 'font-style',
          'value': 'italic'
        },
        'underline': {
          'style': 'text-decoration',
          'value': 'underline'
        }
      };
      var cmd = this.styleCommand;
      var createdClass = '.blast-word-' + this.textToFind;
      $(createdClass).css('background-color', 'white');
      $(createdClass).css(commands[cmd].style, commands[cmd].value);
    }
  }
});
