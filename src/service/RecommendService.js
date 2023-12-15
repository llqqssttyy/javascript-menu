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
    Validate.hateMenusForm(hateMenus);

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

  // 카테고리 객체에게 메뉴 추천
  // 각 코치의 recommendMenus의 길이가 5가 될 때 까지 반복

  get coaches() {
    return this.#coaches.map((coach) => coach.name);
  }

  get categories() {
    return this.#categories.map((category) => category.category);
  }
}

export default RecommendService;
