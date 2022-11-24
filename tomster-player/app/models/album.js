import Model, { attr, hasMany } from '@ember-data/model';

export default class AlbumModel extends Model {
  @attr title;
  @attr coverUrl;

  @hasMany songs;
  @hasMany comments;
}
