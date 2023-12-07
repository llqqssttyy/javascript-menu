import { SEPERATOR } from '../../constants/constants.js';
import { ERRORS } from '../../constants/messages.js';
import throwError from '../../utils/throwError.js';
import { isValidNumOfChars } from '../validators/CoachValidator.js';
import {
  hasDuplicatedElement,
  isEmptyString,
} from '../validators/StringValidator.js';

class Coach {
  #name;

  #excludedMenus;

  #recomendedMenus;

  constructor(name) {
    this.#validate(name);

    this.#name = name;
  }

  set excludedMenus(menus) {
    if (hasDuplicatedElement(menus)) throwError(ERRORS.duplicatedElement);

    this.#excludedMenus = menus.split(SEPERATOR);
  }

  #validate(name) {
    if (isEmptyString(name)) throwError(ERRORS.emptyString);

    if (!isValidNumOfChars(name)) throwError(ERRORS.invalidNumOfChars);
  }
}

export default Coach;
