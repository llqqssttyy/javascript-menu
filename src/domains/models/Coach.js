import { SEPERATOR } from '../../constants/constants.js';
import { ERRORS } from '../../constants/messages.js';
import throwError from '../../utils/throwError.js';
import { isValidNumOfChars } from '../validators/CoachValidator.js';
import { isExistMenu } from '../validators/MenusValidator.js';
import {
  hasDuplicatedElement,
  isEmptyString,
} from '../validators/StringValidator.js';

class Coach {
  #name;

  #excludedMenus;

  constructor(name) {
    this.#validate(name);

    this.#name = name;
    this.#excludedMenus = [];
  }

  set excludedMenus(menus) {
    if (hasDuplicatedElement(menus)) throwError(ERRORS.duplicatedElement);

    if (!isExistMenu(menus)) throwError(ERRORS.notExistMenu);

    if (menus !== '') this.#excludedMenus = menus.split(SEPERATOR);
  }

  get name() {
    return this.#name;
  }

  #validate(name) {
    if (isEmptyString(name)) throwError(ERRORS.emptyString);

    if (!isValidNumOfChars(name)) throwError(ERRORS.invalidNumOfChars);
  }
}

export default Coach;
