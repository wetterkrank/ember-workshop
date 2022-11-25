import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import Service from '@ember/service';

// Stub remoteControl service
class RemoteControl extends Service {
  song = {
    title: 'I Will Always Love You',
    album: {
      title: 'Whitney Houston'
    }
  };

  registerAudio() {}
}

module('Integration | Component | player', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:remote-control', RemoteControl);
  });

  test('it renders the Audio element', async function(assert) {
    await render(hbs`<Player />`);

    assert.dom('audio').exists();
  });

  test('it renders the current song details', async function(assert) {
    await render(hbs`<Player />`);

    assert.dom(this.element).containsText('I Will Always Love You / Whitney Houston');
  });
});
