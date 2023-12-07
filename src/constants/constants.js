export const MIN_NUM_OF_COACHES = 2;
export const MAX_NUM_OF_COACHES = 5;

export const MIN_CHARS_OF_NAME = 2;
export const MAX_CHARS_OF_NAME = 4;

export const MIN_NUM_OF_EXCLUDED_MENUS = 0;
export const MAX_NUM_OF_EXCLUDED_MENUS = 0;

const MONDAY = 0;
const TUESDAY = 1;
const WEDNESDAY = 2;
const THURSDAY = 3;
const FRIDAY = 4;
export const WEEKDAY = [MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY];

export const MIN_INDEX_OF_MENU = 1;
export const MAX_INDEX_OF_MENU = 5;

export const SEPERATOR = ',';

// 코치 이름 입력 형식 검사 regex
export const SEPERATOR_REGEX = new RegExp(/^([^,]+,)*[^,]+$/);
