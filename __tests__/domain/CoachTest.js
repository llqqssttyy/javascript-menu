import Coach from '../../src/domain/models/Coach';

describe('Coach 클래스 유효성 검사', () => {
  test('name 유효성 검사', () => {
    const INPUT = '이름없는이름';

    expect(() => new Coach(INPUT)).toThrow('[ERROR]');
  });

  test.each(['우동-미소시루', '짜파게티,우동', '우동,미소시루,하이라이스'])(
    'hateMenus 유효성 검사',
    (input) => {
      const NAME = '단';

      const coach = new Coach(NAME);

      expect(() => (coach.hateMenus = input)).toThrow('[ERROR]');
    }
  );
});

describe('Coach 클래스 추천 메뉴 초기화 테스트', () => {
  test('hateMenus 유효성 검사', () => {
    const NAME = '단';
    const RECOMMENDED_MENUS = ['우동', '김밥'];
    const RESULT = ['김밥'];

    const coach = new Coach(NAME);
    coach.hateMenus = '우동,미소시루';

    RECOMMENDED_MENUS.forEach((menu) => {
      coach.setRecommendMenus(menu);
    });
    expect(coach.recommendMenus).toEqual(RESULT);
  });
});
