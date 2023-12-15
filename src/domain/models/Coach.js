import { SEPERATOR } from '../../statics/constants.js';
import Validate from '../validators/Validate.js';

class Coach {
  #name;

  #hateMenus;

  #recommendMenus = [];

  constructor(name) {
    Validate.name(name);
    this.#name = name;
  }

  set hateMenus(input) {
    Validate.hateMenus(input);
    this.#hateMenus = input.split(SEPERATOR);
  }

  set recommendMenus(menu) {
    if (!this.#isDuplicatedMenu(menu) && !this.#isHateMenu(menu))
      this.#recommendMenus.push(menu);
  }

  get recommendMenus() {
    return this.#recommendMenus;
  }

  get name() {
    return this.#name;
  }

  #isDuplicatedMenu(menu) {
    return this.#recommendMenus.includes(menu);
  }

  #isHateMenu(menu) {
    return this.#hateMenus.includes(menu);
  }
}

export default Coach;
