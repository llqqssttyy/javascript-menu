import stringToArray from '../utils/stringToArray.js';
import Coach from './Coach.js';

class MenuRecommend {
  #coaches;

  set coaches(names) {
    this.#validateCoaches(names);

    this.#coaches = stringToArray(names).map((name) => new Coach(name));
  }

  get coaches() {
    return this.#coaches;
  }

  #validateCoaches(input) {}
}

export default MenuRecommend;
