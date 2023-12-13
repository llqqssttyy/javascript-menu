import MENUS from '../statics/menus';

class Category {
  #name;

  #menus;

  constructor(name) {
    this.#name = name;
    this.#menus = MENUS[name];
  }

  // 메뉴 추천
  recommendMenu() {}
}

export default Category;
