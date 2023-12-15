import {
  MAX_NAME_CNT,
  MAX_NAME_LENGTH,
  MIN_NAME_CNT,
  MIN_NAME_LENGTH,
  SEPERATOR,
} from '../../statics/constants.js';

export const isEmptyString = (input) => {
  return input.trim() === '';
};

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
