import Scheduler from '../../src/domains/Scheduler';

describe('Scheduler 클래스 테스트', () => {
  test.each([
    '',
    '가가,가가',
    '가가-나나',
    '가가',
    '가가,나나,다다,라라,마마,바바,사사',
  ])('코치 이름 입력 validator 작동 테스트', (input) => {
    const scheduler = new Scheduler();

    expect(() => (scheduler.coaches = input)).toThrow('[ERROR]');
  });

  test.each(['가가,나나'])('코치 이름 입력 validator 통과 테스트', (input) => {
    const scheduler = new Scheduler();

    expect(() => (scheduler.coaches = input)).not.toThrow('[ERROR]');
  });
});
