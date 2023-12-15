import { ERRORS } from '../../statics/messages.js';
import throwError from '../../utils/throwError.js';
import {
  hasDuplicatedElement,
  isEmptyString,
  isValidForm,
  isValidNameCount,
  isValidNameLength,
  isExistMenus,
} from './validators.js';

const Validate = {
  namesForm(input) {
    if (isEmptyString(input)) throwError(ERRORS.whitespace);

    if (!isValidForm(input)) throwError(ERRORS.invalidNamesForm);

    if (!isValidNameCount(input)) throwError(ERRORS.invalidNameCount);

    if (hasDuplicatedElement(input)) throwError(ERRORS.hasDuplicatedName);
  },

  name(input) {
    if (!isValidNameLength(input)) throwError(ERRORS.invalidNameLength);
  },

  hateMenus(input) {
    if (isEmptyString(input)) return;

    if (!isValidForm(input)) throwError(ERRORS.invalidMenusForm);

    if (!isExistMenus(input)) throwError(ERRORS.invalidMenus);
  },
};

export default Validate;
