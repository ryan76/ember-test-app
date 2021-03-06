import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ["progress-bar"],

  computeText: function() {
    var value = parseInt(this.get('value'), 10);
    var maxValue = parseInt(this.get('maxValue'), 10);
    var percent = value/maxValue * 100;
    var text = percent.toString() + '%';
    return text;
  }.property('value', 'maxValue')
});
