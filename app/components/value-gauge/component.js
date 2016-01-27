import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['value-gauge'],
  classNameBindings: ['isMaxValueExceeded:exceeded'],

  isMaxValueExceeded: function(){
    // parseInt because we want Numbers and inputs value actually are Strings
    var value    = parseInt(this.get('value'), 10);
    var maxValue = parseInt(this.get('maxValue'), 10);
    return (value > maxValue); // return a Boolean
  }.property('value', 'maxValue'),

  computedAngle: function(){
    // parseInt because we want Numbers and inputs value actually are Strings
    var value    = parseInt(this.get('value'), 10);
    var maxValue = parseInt(this.get('maxValue'), 10);

    var angle = Math.floor( 180 * value/maxValue - 90 );
    var styles = 'transform: rotate('+angle+'deg)';

    return styles;
  }.property('maxValue', 'currentValue')
});
