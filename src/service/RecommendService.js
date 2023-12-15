import Validate from '../domain/validators/Validate.js';
import {
  MAX_CATEGORY_CNTS,
  MAX_CATEGORY_ID,
  MIN_CATEGORY_ID,
  SEPERATOR,
  WEEK,
} from '../statics/constants.js';
import Coach from '../domain/models/Coach.js';
import { CATEGORIES } from '../statics/menus.js';
import { Random } from '@woowacourse/mission-utils';
import checkEleCntsInArr from '../utils/checkEleCntsInArr.js';
import Category from '../domain/models/Category.js';

class RecommendService {
  #coaches = [];

  #categories = [];

  generateCoaches(input) {
    Validate.namesForm(input);

    this.#coaches = input.split(SEPERATOR).map((name) => new Coach(name));
  }

  /**
   * @param {string[]} hateMenus
   */
  initiateHateMenus(hateMenus) {
    this.#coaches.forEach((coach, idx) => {
      coach.hateMenus = hateMenus[idx];
    });
  }

  pickCategories() {
    while (this.#categories.length < WEEK.length) {
      const categoryId =
        Random.pickNumberInRange(MIN_CATEGORY_ID, MAX_CATEGORY_ID) - 1;
      const category = CATEGORIES[categoryId];

      if (checkEleCntsInArr(this.categories, category, MAX_CATEGORY_CNTS))
        return;

      this.#categories.push(new Category(category));
    }
  }

  pickRecommendMenus() {
    this.#coaches.forEach((coach) => {
      while (coach.recommendMenus.length < WEEK.length) {
        const weekOfDay = coach.recommendMenus.length;
        const category = this.#categories[weekOfDay];
        coach.recommendMenus = category.getRecommend();
      }
    });
  }

  get coaches() {
    return this.#coaches.map((coach) => coach.name);
  }

  get categories() {
    return this.#categories.map((category) => category.category);
  }

  get recommendResults() {
    return this.#coaches.map((coach) => {
      return {
        name: coach.name,
        recommendMenus: coach.recommendMenus,
      };
    });
  }
}

export default RecommendService;
