import Coach from './models/Coach.js';

import { ERRORS } from '../constants/messages.js';
import {
  MAX_INDEX_OF_MENU,
  MIN_INDEX_OF_MENU,
  SEPERATOR,
  WEEKDAY,
} from '../constants/constants.js';

import throwError from '../utils/throwError.js';

import {
  isValidForm,
  isValidNumOfCoaches,
} from './validators/CoachValidator.js';
import {
  hasDuplicatedElement,
  isEmptyString,
} from './validators/StringValidator.js';
import { Random } from '@woowacourse/mission-utils';
import MENUS from '../constants/menus.js';

class Scheduler {
  #coaches;

  #categories = [];

  get coachesName() {
    return this.#coaches.map((coaches) => coaches.name);
  }

  set coaches(coachesName) {
    this.#validateCoachesName(coachesName);

    this.#coaches = coachesName.split(SEPERATOR).map((name) => new Coach(name));
  }

  setCoachesExcludedMenus(excludedMenus) {
    this.#coaches.map((coach, idx) => {
      coach.excludedMenus = excludedMenus[idx];
    });
  }

  recommendMenus() {
    this.#setCategories();
  }

  #setCategories() {
    const categories = [];

    while (categories.length < WEEKDAY.length) {
      const categoryNum = Random.pickNumberInRange(
        MIN_INDEX_OF_MENU,
        MAX_INDEX_OF_MENU,
      );

      if (categories.includes(categoryNum).length >= 3) return;

      categories.push(Object.keys(MENUS)[categoryNum - 1]);
    }
    this.#categories = categories;
  }

  #validateCoachesName(coachesName) {
    if (isEmptyString(coachesName)) throwError(ERRORS.emptyString);

    if (hasDuplicatedElement(coachesName)) throwError(ERRORS.duplicatedElement);

    if (!isValidForm(coachesName)) throwError(ERRORS.invalidCoachNameForm);

    if (!isValidNumOfCoaches(coachesName))
      throwError(ERRORS.invalidNumOfCoaches);
  }
}

export default Scheduler;
