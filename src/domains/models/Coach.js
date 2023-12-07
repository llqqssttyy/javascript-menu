import { SEPERATOR } from '../../constants/constants.js';
import MENUS from '../../constants/menus.js';
import { ERRORS } from '../../constants/messages.js';
import getShuffleNum from '../../utils/getShuffleNum.js';
import throwError from '../../utils/throwError.js';
import { isValidNumOfChars } from '../validators/CoachValidator.js';
import { isExistMenu } from '../validators/MenusValidator.js';
import {
  hasDuplicatedElement,
  isEmptyString,
} from '../validators/StringValidator.js';

class Coach {
  #name;

  #excludedMenus = [];

  #recommendedMenus = [];

  constructor(name) {
    this.#validate(name);
    this.#name = name;
  }

  #validate(name) {
    if (isEmptyString(name)) throwError(ERRORS.emptyString);

    if (!isValidNumOfChars(name)) throwError(ERRORS.invalidNumOfChars);
  }

  setRecommendedMenus(categories) {
    categories.forEach((category, dayOfWeek) => {
      const menus = MENUS[category].split(', ');

      while (!this.#recommendedMenus[dayOfWeek]) {
        const recommendedMenu = menus[getShuffleNum(menus.length) - 1];

        if (this.#isAvailableMenu(recommendedMenu))
          this.#recommendedMenus.push(recommendedMenu);
      }
    });
  }

  set excludedMenus(menus) {
    if (hasDuplicatedElement(menus)) throwError(ERRORS.duplicatedElement);

    if (!isExistMenu(menus)) throwError(ERRORS.notExistMenu);

    if (menus !== '') this.#excludedMenus = menus.split(SEPERATOR);
  }

  get name() {
    return this.#name;
  }

  get recommendedMenus() {
    return this.#recommendedMenus;
  }

  get result() {
    return {
      name: this.#name,
      menus: this.#recommendedMenus,
    };
  }

  #isAvailableMenu(menu) {
    if (
      this.#recommendedMenus.length !== 0 &&
      this.#recommendedMenus.includes(menu)
    )
      return false;

    if (this.#excludedMenus.length !== 0 && this.#excludedMenus.includes(menu))
      return false;

    return true;
  }
}

export default Coach;
