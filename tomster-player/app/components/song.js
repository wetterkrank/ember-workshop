import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from "@ember/object";

export default class SongComponent extends Component {
  @service remoteControl;

  @action
  togglePlay(song) {
    this.remoteControl.toggle(song);
  }

  @action
  play(song) {
    this.remoteControl.play(song);
  }

  @action
  stop() {
    this.remoteControl.stop();
  }
}
