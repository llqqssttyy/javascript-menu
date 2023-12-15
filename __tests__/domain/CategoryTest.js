import { MissionUtils } from '@woowacourse/mission-utils';
import Category from '../../src/domain/models/Category';

const mockShuffles = (rows) => {
  MissionUtils.Random.shuffle = jest.fn();

  rows.reduce((acc, [firstNumber, numbers]) => {
    return acc.mockReturnValueOnce([
      firstNumber,
      ...numbers.filter((number) => number !== firstNumber),
    ]);
  }, MissionUtils.Random.shuffle);
};

describe('Category 모델 테스트', () => {
  test('category 초기화 테스트', () => {
    const CATEGORY = '일식';

    const category = new Category(CATEGORY);

    expect(category.category).toBe(CATEGORY);
  });

  test('getRecommend 기능 테스트', () => {
    const MENUS = ['우동', '하이라이스', '규동', '스시', '라멘'];
    const CATEGORY = '일식';
    const sequenced = (_, idx) => idx + 1;
    mockShuffles([
      [2, Array.from({ length: 9 }, sequenced)],
      [7, Array.from({ length: 9 }, sequenced)],
      [1, Array.from({ length: 9 }, sequenced)],
      [4, Array.from({ length: 9 }, sequenced)],
      [8, Array.from({ length: 9 }, sequenced)],
    ]);

    const category = new Category(CATEGORY);

    expect(category.category).toBe(CATEGORY);
    MENUS.forEach((menu) => {
      expect(category.getRecommend()).toBe(menu);
    });
  });
});
