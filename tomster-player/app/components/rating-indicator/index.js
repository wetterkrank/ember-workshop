import Component from '@glimmer/component';

export default class RatingIndicator extends Component {
  get activeStars() {
    let roundedRating = Math.round(this.rating);

    return new Array(roundedRating);
  }
}
