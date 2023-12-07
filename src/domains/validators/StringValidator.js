import { SEPERATOR } from '../../constants/constants.js';

export const isEmptyString = (str) => {
  return str.trim() === '';
};

export const hasDuplicatedElement = (str) => {
  const elements = new Set(str.split(SEPERATOR));
  return elements.size !== str.split(SEPERATOR).length;
};
