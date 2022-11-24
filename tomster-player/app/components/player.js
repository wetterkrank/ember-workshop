import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
// import { action } from "@ember/object";


export default class PlayerComponent extends Component {
  @service player;

  get song() {
    return this.player.song;
  }

  // @action
  // play(song) {
  //   this.service.play(song);
  // }

  // @action
  // pause() {
  //   this.service.stop();
  // }
}
