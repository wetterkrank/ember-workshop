import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AlbumController extends Controller {
  @action
  addComment(value) {
    const commentAttributes = {
      text: value,
      rating: 0
    }
    const comment = this.store.createRecord('comment', commentAttributes);
    this.model.comments.pushObject(comment)
  }
}
