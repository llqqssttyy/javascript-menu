import {
  MAX_MENUS_CNTS,
  MAX_NAME_CNT,
  MAX_NAME_LENGTH,
  MIN_MENUS_CNTS,
  MIN_NAME_CNT,
  MIN_NAME_LENGTH,
  SEPERATOR,
} from '../../statics/constants.js';
import { MENUS } from '../../statics/menus.js';

// Common
export const isEmptyString = (input) => {
  return input.trim() === '';
};

export const hasDuplicatedElement = (input) => {
  const arr = input.split(SEPERATOR);
  const set = new Set(arr);
  return set.size !== arr.length;
};

// 코치 이름 유효성 검사
export const isValidForm = (input) => {
  const formRegex = new RegExp(
    /^([ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z]+,)*([ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z]+,?)$/
  );
  return formRegex.test(input);
};

export const isValidNameCount = (input) => {
  const nameCnt = input.split(SEPERATOR).length;
  return nameCnt >= MIN_NAME_CNT && nameCnt <= MAX_NAME_CNT;
};

export const isValidNameLength = (input) => {
  const nameLength = input.length;
  return nameLength >= MIN_NAME_LENGTH, nameLength <= MAX_NAME_LENGTH;
};

export const isExistMenus = (input) => {
  const menus = input.split(SEPERATOR);
  return menus.every((menu) =>
    Object.values(MENUS).some((menus) => menus.includes(menu))
  );
};

export const isValidMenusCount = (input) => {
  const menusCnt = input.split(SEPERATOR).length;
  return menusCnt >= MIN_MENUS_CNTS && menusCnt <= MAX_MENUS_CNTS;
};
