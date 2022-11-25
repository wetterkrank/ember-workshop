import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from "@ember/object";


export default class PlayerComponent extends Component {
  @service remoteControl;

  get song() {
    return this.remoteControl.song;
  }

  @action
  register(element) {
    this.remoteControl.registerAudio(element);
  }

  @action
  canplay() {
    this.remoteControl.audioCanPlay();
  }

  @action
  playing() {
    this.remoteControl.audioPlaying();
  }

  @action
  paused() {
    this.remoteControl.audioPaused();
  }
}
