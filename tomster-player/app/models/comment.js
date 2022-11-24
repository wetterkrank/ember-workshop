import Model, { attr, belongsTo } from '@ember-data/model';

export default class CommentModel extends Model {
  @attr rating;
  @attr text;

  @belongsTo album;
}
