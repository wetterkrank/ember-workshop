import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from "@ember/object";

export default class SongComponent extends Component {
  @service player;

  @action
  togglePlay(song) {
    this.player.toggle(song);
  }

  @action
  play(song) {
    this.player.play(song);
  }

  @action
  stop() {
    this.player.stop();
  }
}
