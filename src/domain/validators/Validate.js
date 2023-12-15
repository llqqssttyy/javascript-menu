import { ERRORS } from '../../statics/messages.js';
import throwError from '../../utils/throwError.js';
import {
  isEmptyString,
  isValidNameCount,
  isValidNameForm,
  isValidNameLength,
} from './validators.js';

const Validate = {
  namesForm(input) {
    if (isEmptyString(input)) throwError(ERRORS.whitespace);

    if (!isValidNameForm(input)) throwError(ERRORS.invalidNamesForm);

    if (!isValidNameCount(input)) throwError(ERRORS.invalidNameCount);
  },

  name(input) {
    if (!isValidNameLength(input)) throwError(ERRORS.invalidNameLength);
  },

  hateMenusForm() {},

  hateMenus() {},
};

export default Validate;
