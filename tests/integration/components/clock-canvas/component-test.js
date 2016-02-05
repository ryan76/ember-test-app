import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('clock-canvas', 'Integration | Component | clock canvas', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{clock-canvas}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#clock-canvas}}
      template block text
    {{/clock-canvas}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
