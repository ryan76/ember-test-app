import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ["progress-bar"],

  computeValue: function() {
    var value = parseInt(this.get('value'), 10);
    return value;
  }.property('value'),

  computeText: function() {
    var maxValue = parseInt(this.get('maxValue'), 10);
    var value = parseInt(this.get('value'), 10);
    var percent = value/maxValue * 100;
    var text = percent.toString() + '%';
    return text;
  }.property('text')
});
