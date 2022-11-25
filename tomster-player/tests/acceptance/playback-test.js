import { module, test } from "qunit";
import { visit, currentURL, click } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";
import Pretender from "pretender";

const ALBUMS = [
  {
    id: "1",
    type: "album",
    attributes: {
      title: "The Bodyguard",
      "cover-url": "#",
    },
    relationships: {
      songs: {
        data: [
          { type: "song", id: "1" },
          { type: "song", id: "2" },
        ],
      },
      comments: {
        data: [],
      },
    },
  },
];

const SONGS = [
  {
    id: "1",
    type: "song",
    attributes: {
      title: "I Will Always Love You",
      duration: 30000,
      "mp3-url": "#",
    },
    relationships: {
      album: {
        data: { type: "albums", id: "1" },
      },
    },
  },
  {
    id: "2",
    type: "song",
    attributes: {
      title: "I Have Nothing",
      duration: 30000,
      "mp3-url": "#",
    },
    relationships: {
      album: {
        data: { type: "albums", id: "1" },
      },
    },
  },
];

module("Acceptance | playback", function (hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function () {
    this.server = new Pretender(function () {
      this.get("/api/albums", function () {
        return [
          200,
          { "Content-Type": "application/vnd.api+json" },
          JSON.stringify({ data: ALBUMS }),
        ];
      });
      this.get("/api/albums/1", function () {
        return [
          200,
          { "Content-Type": "application/vnd.api+json" },
          JSON.stringify({ data: ALBUMS[0] }),
        ];
      });
      this.get("/api/songs/:id", function (request) {
        return [
          200,
          { "Content-Type": "application/vnd.api+json" },
          JSON.stringify({ data: SONGS[request.params.id - 1] }),
        ];
      });
    });
  });

  hooks.afterEach(function () {
    this.server.shutdown();
  });

  test("visiting /", async function (assert) {
    await visit("/");

    assert.equal(currentURL(), "/albums/1");
  });

  test("starting the playback", async function (assert) {
    await visit("/");

    await click("[data-test-song]");

    assert.dom('audio').hasProperty('src', /.*#/);
  });
});
