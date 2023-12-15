import Validate from '../domain/validators/Validate.js';
import { SEPERATOR } from '../statics/constants.js';
import Coach from '../domain/models/Coach.js';

class RecommendService {
  #coaches;

  generateCoaches(input) {
    Validate.namesForm(input);
    this.#coaches = input.split(SEPERATOR).map((name) => new Coach(name));
  }

  /**
   * @param {string[]} hateMenus
   */
  initiateHateMenus(hateMenus) {
    Validate.hateMenusForm(hateMenus);
    this.#coaches.forEach((coach, idx) => {
      coach.hateMenus = hateMenus[idx];
    });
  }

  get coaches() {
    return this.#coaches.map((coach) => coach.name);
  }
}

export default RecommendService;
