const OUTPUTS = Object.freeze({
  start() {
    return '점심 메뉴 추천을 시작합니다.\n';
  },
});

const INPUTS = Object.freeze({
  coachName: '코치의 이름을 입력해 주세요. (, 로 구분)\n',

  excludedMenus(coachName) {
    return `${coachName}(이)가 못 먹는 메뉴를 입력해 주세요.\n`;
  },
});

const ERRORS = Object.freeze({
  prefix: '[ERROR]',
});

export { OUTPUTS, INPUTS, ERRORS };
