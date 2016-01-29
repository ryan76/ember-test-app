import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['value-gauge'],
  classNameBindings: ['isMaxValueExceeded:exceeded'],

  isMaxValueExceeded: function(){
    // parseInt because we want ensure input values are Numbers or String representation of numbers
    var value    = parseInt(this.get('value'), 10);
    var maxValue = parseInt(this.get('maxValue'), 10);
    return (value > maxValue); // return a Boolean
  }.property('value', 'maxValue'),

  computedAngle: function(){
    // parseInt because we want ensure input values are Numbers or String representation of numbers
    var value    = parseInt(this.get('value'), 10);
    var maxValue = parseInt(this.get('maxValue'), 10);
    var percentValue = Math.floor( value/maxValue * 100 );
    var angle = Math.floor(180 * percentValue/100 - 90);
    var maxExceededStyle = '-webkit-transform: rotate(90deg); -moz-transform: rotate(90deg); -ms-transform: rotate(90deg); transform: rotate(90deg);';
    var notExceededStyle = '-webkit-transform: rotate('+angle+'deg); -moz-transform: rotate('+angle+'deg); -ms-transform: rotate('+angle+'deg); transform: rotate('+angle+'deg);';
    var styles = ( this.get('isMaxValueExceeded') ) ? maxExceededStyle : notExceededStyle;
    return new Ember.Handlebars.SafeString(styles);
  }.property('value', 'maxValue')
});
