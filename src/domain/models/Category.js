import { Random } from '@woowacourse/mission-utils';
import { MENUS } from '../../statics/menus.js';

class Category {
  #category;

  #menus = [];

  constructor(category) {
    this.#category = category;
    this.#menus = MENUS[category];
  }

  getRecommend() {
    const menuId = Random.shuffle(
      Array.from({ length: this.#menus.length }, (_, idx) => idx + 1)
    )[0];
    return this.#menus[menuId - 1];
  }

  get category() {
    return this.#category;
  }
}

export default Category;
