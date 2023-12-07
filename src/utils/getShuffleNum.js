import { Random } from '@woowacourse/mission-utils';

const getShuffleNum = (length) => {
  const shuffleArr = Array.from({ length: length }, (_, index) => index + 1);
  return Random.shuffle(shuffleArr)[0];
};

export default getShuffleNum;
