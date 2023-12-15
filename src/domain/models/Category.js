class Category {
  #category;

  #menus = [];

  constructor(category) {
    this.#category = category;
    this.#menus = MENUS[category];
  }

  pickMenu() {}
}

export default Category;
