import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AlbumsController extends Controller {
  @action
  alert(album, event) {
    console.log(event);
    window.alert(album.title);
  }
}
