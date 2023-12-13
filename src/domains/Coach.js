import stringToArray from '../utils/stringToArray';

class Coach {
  #name;

  #hateMenus = [];

  #recommendMenus = [];

  constructor(name) {
    this.#validateName(name);
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  set hateMenus(menus) {
    this.#validateHateMenus(menus);

    this.#hateMenus = stringToArray(menus);
  }

  #validateName(input) {}

  #validateHateMenus(input) {}
}

export default Coach;
