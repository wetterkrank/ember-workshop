import Service from "@ember/service";
import { tracked } from "@glimmer/tracking";

export default class PlayerService extends Service {
  @tracked song = null;
  @tracked playing = false;

  toggle(song) {
    if (this.playing && this.song == song) {
      this.pause();
    } else {
      this.play(song);
    }
  }

  play(song) {
    this.playing = true;
    this.song = song;
  }

  pause() {
    console.log('PAUSE')
    this.playing = false;
    // const audio = document.getElementById("player");
    // audio.pause();
  }
}
