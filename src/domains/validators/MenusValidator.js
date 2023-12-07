import {
  MAX_NUM_OF_EXCLUDED_MENUS,
  MIN_NUM_OF_EXCLUDED_MENUS,
  SEPERATOR,
} from '../../constants/constants.js';
import MENUS from '../../constants/menus.js';

export const isValidNumOfMenus = (menus) => {
  const numOfMenus = menus.split(SEPERATOR).length;
  return (
    numOfMenus >= MIN_NUM_OF_EXCLUDED_MENUS &&
    numOfMenus <= MAX_NUM_OF_EXCLUDED_MENUS
  );
};

export const isExistMenu = (menuStr) => {
  const menus = menuStr.split(SEPERATOR);

  if (menuStr === '') return true;

  return menus.every((menu) => {
    const result = Object.values(MENUS).filter((existMenus) => {
      if (existMenus.split(', ').includes(menu)) return true;
    });
    return result.length !== 0;
  });
};
