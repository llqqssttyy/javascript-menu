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

  get result() {
    return this.#coaches.map((coach) => {
      return coach.result;
    });
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
    this.#setCoachesMenus();
  }

  #setCategories() {
    while (this.#categories.length < WEEKDAY.length) {
      const categoryNum = Random.pickNumberInRange(
        MIN_INDEX_OF_MENU,
        MAX_INDEX_OF_MENU,
      );
      if (
        this.#categories.filter(
          (category) => category === Object.keys(MENUS)[categoryNum - 1],
        ).length >= 2
      )
        return;
      this.#categories.push(Object.keys(MENUS)[categoryNum - 1]);
    }
  }

  #setCoachesMenus() {
    this.#coaches.forEach((coach) => {
      coach.setRecommendedMenus(this.#categories);
    });
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
