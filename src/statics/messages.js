const ERRORS = Object.freeze({
  prefix: '[ERROR]',
});

const INPUTS = Object.freeze({
  coachesName: '코치의 이름을 입력해 주세요. (, 로 구분)\n',
  hateMenus(name) {
    return `${name}(이)가 못 먹는 메뉴를 입력해 주세요.\n`;
  },
});

const OUTPUTS = Object.freeze({
  startGuide: '점심 메뉴 추천을 시작합니다.\n',
});

export { ERRORS, INPUTS, OUTPUTS };
