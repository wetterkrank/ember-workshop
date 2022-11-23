import Route from '@ember/routing/route';

export default class AlbumRoute extends Route {
  model(params) {
    return this.store.findRecord('album', params.album_id);
  }
}
