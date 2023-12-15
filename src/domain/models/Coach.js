import Validate from '../validators/Validate.js';

class Coach {
  #name;

  #hateMenus;

  #recommendMenus;

  constructor(name) {
    Validate.name(name);
    this.#name = name;
  }

  isDuplicatedMenu(menu) {}

  isHateMenu(menu) {}
}

export default Coach;
