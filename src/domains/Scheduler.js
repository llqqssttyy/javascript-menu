import Coach from './models/Coach';

import { ERRORS } from '../constants/messages';
import { SEPERATOR } from '../constants/constants';

import throwError from '../utils/throwError';

import { isValidForm, isValidNumOfCoaches } from './validators/CoachValidator';
import {
  hasDuplicatedElement,
  isEmptyString,
} from './validators/StringValidator';

class Scheduler {
  #coaches;

  set coaches(coachesName) {
    this.#validateCoachesName(coachesName);

    this.#coaches = coachesName.split(SEPERATOR).map((name) => new Coach(name));
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
