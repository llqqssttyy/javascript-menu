import Coach from './models/Coach.js';

import { ERRORS } from '../constants/messages.js';
import { SEPERATOR } from '../constants/constants.js';

import throwError from '../utils/throwError.js';

import {
  isValidForm,
  isValidNumOfCoaches,
} from './validators/CoachValidator.js';
import {
  hasDuplicatedElement,
  isEmptyString,
} from './validators/StringValidator.js';

class Scheduler {
  #coaches;

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

  #validateCoachesName(coachesName) {
    if (isEmptyString(coachesName)) throwError(ERRORS.emptyString);

    if (hasDuplicatedElement(coachesName)) throwError(ERRORS.duplicatedElement);

    if (!isValidForm(coachesName)) throwError(ERRORS.invalidCoachNameForm);

    if (!isValidNumOfCoaches(coachesName))
      throwError(ERRORS.invalidNumOfCoaches);
  }
}

export default Scheduler;
