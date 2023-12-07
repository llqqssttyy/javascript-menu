import { ERRORS } from '../../constants/messages';
import throwError from '../../utils/throwError';
import { isValidNumOfChars } from '../validators/CoachValidator';
import { isEmptyString } from '../validators/StringValidator';

class Coach {
  #name;

  constructor(name) {
    this.#validate(name);

    this.#name = name;
  }

  #validate(name) {
    if (isEmptyString(name)) throwError(ERRORS.emptyString);

    if (!isValidNumOfChars(name)) throwError(ERRORS.invalidNumOfChars);
  }
}

export default Coach;
