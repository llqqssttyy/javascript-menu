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

  emptyString: '공백은 입력할 수 없습니다.]\n',
  duplicatedElement: '입력한 값은 중복 없이 고유해야 합니다.',

  invalidCoachNameForm: '이름은 쉼표로 구분하여 입력해야 합니다.\n',
  invalidNumOfCoaches: '코치는 최소 2명, 최대 5명 입력 가능합니다.\n',
  invalidNumOfChars: '이름은 최소 2글자, 최대 4글자 입력 가능합니다.\n',
});

export { OUTPUTS, INPUTS, ERRORS };
