import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | song', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    this.song = {
      title: "I Will Always Love You"
    };

    await render(hbs`<Song @song={{this.song}}/>`);

    assert.equal(this.element.textContent.trim(), 'I Will Always Love You');
  });
});
