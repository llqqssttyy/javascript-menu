import {
  MAX_NAME_CNT,
  MAX_NAME_LENGTH,
  MIN_NAME_CNT,
  MIN_NAME_LENGTH,
  SEPERATOR,
} from '../../statics/constants.js';

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
export const isValidNameForm = (input) => {
  const nameRegex = new RegExp(
    /^([ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z]+,)*([ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z]+,?)$/
  );
  return nameRegex.test(input);
};

export const isValidNameCount = (input) => {
  const nameCnt = input.split(SEPERATOR).length;
  return nameCnt >= MIN_NAME_CNT && nameCnt <= MAX_NAME_CNT;
};

export const isValidNameLength = (input) => {
  const nameLength = input.length;
  return nameLength >= MIN_NAME_LENGTH, nameLength <= MAX_NAME_LENGTH;
};

export const isValidMenusForm = (input) => {};
