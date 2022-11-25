import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | album", function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.albumInfo = {
      title: "Whitney Houston",
      coverUrl: "#",
    };
    this.albumSongs = [
      {
        title: "I Will Always Love You",
      },
      {
        title: "Even If My Heart Would Break",
      },
    ];
  });

  test("it renders the album title", async function (assert) {
    await render(
      hbs`<Album @info={{this.albumInfo}} @songs={{this.albumSongs}}/>`
    );

    assert.dom(this.element).containsText("Whitney Houston");
  });

  test("it renders the album songs", async function (assert) {
    await render(
      hbs`<Album @info={{this.albumInfo}} @songs={{this.albumSongs}}/>`
    );

    assert.dom('[data-test-song]').exists({ count: 2 });
    assert.dom(this.element).containsText("I Will Always Love You");
  });
});
