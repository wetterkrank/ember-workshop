import Service from "@ember/service";
import { tracked } from "@glimmer/tracking";

export default class RemoteControlService extends Service {
  @tracked song = null;
  @tracked playing = false;
  @tracked audio = null; // when do we need @tracked?

  registerAudio(element) {
    this.audio = element;
  }

  audioCanPlay() {
    this.audio.play();
  }

  audioPlaying() {
    this.playing = true;
  }

  audioPaused() {
    this.playing = false;
  }

  toggle(song) {
    if (this.playing && this.song == song) {
      this.pause();
    } else {
      this.play(song);
    }
  }

  play(song) {
    this.song = song;
    this.audio.load();
  }

  pause() {
    this.audio.pause();
  }
}
