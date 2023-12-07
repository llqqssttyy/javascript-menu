import Coach from '../../src/domains/models/Coach';

describe('Coach 클래스 테스트', () => {
  test.each(['', '가나다라마', '가'])(
    '코치 이름 입력 validator 작동 테스트',
    (name) => {
      expect(() => new Coach(name)).toThrow('[ERROR]');
    },
  );

  test.each(['포비'])('코치 이름 입력 validator 통과 테스트', (name) => {
    expect(() => new Coach(name)).not.toThrow('[ERROR]');
  });

  test.each(['규동,규동', '규동,돈까스'])(
    '제외 메뉴 입력 validator 작동 테스트',
    (excludedMenus) => {
      const coach = new Coach('포비');

      expect(() => (coach.excludedMenus = excludedMenus)).toThrow('[ERROR]');
    },
  );

  test.each(['규동,깐풍기', '', '규동'])(
    '제외 메뉴 입력 validator 통과 테스트',
    (excludedMenus) => {
      const coach = new Coach('포비');

      expect(() => (coach.excludedMenus = excludedMenus)).not.toThrow(
        '[ERROR]',
      );
    },
  );
});
