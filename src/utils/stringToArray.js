import { SYMBOLS } from '../statics/constatns.js';

const stringToArray = (str) => {
  return str.split(SYMBOLS.strSeperator);
};

export default stringToArray;
