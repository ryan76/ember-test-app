import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('webgl-cube', 'Integration | Component | webgl cube', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{webgl-cube}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#webgl-cube}}
      template block text
    {{/webgl-cube}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
