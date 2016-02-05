import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('percentage-indicator', 'Integration | Component | percentage indicator', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{percentage-indicator}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#percentage-indicator}}
      template block text
    {{/percentage-indicator}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
