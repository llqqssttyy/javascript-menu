import {
  MAX_CHARS_OF_NAME,
  MAX_NUM_OF_COACHES,
  MIN_CHARS_OF_NAME,
  MIN_NUM_OF_COACHES,
  SEPERATOR,
  SEPERATOR_REGEX,
} from '../../constants/constants';

export const isValidForm = (names) => {
  return SEPERATOR_REGEX.test(names);
};

export const isValidNumOfCoaches = (coaches) => {
  const numOfCoaches = coaches.split(SEPERATOR).length;
  return (
    numOfCoaches >= MIN_NUM_OF_COACHES && numOfCoaches <= MAX_NUM_OF_COACHES
  );
};

export const isValidNumOfChars = (name) => {
  console.log(name, name.length);
  return name.length >= MIN_CHARS_OF_NAME && name.length <= MAX_CHARS_OF_NAME;
};
