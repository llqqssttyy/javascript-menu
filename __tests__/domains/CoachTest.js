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
});
