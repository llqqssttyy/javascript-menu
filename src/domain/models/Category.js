import { MENUS } from '../../statics/menus.js';

class Category {
  #category;

  #menus = [];

  constructor(category) {
    this.#category = category;
    this.#menus = MENUS[category];
  }

  pickMenu() {}

  get category() {
    return this.#category;
  }
}

export default Category;
