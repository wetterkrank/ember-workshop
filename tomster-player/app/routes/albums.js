import Route from '@ember/routing/route';

export default class AlbumsRoute extends Route {
  model() {
    return this.store.findAll('album');
  }
}
