const ERRORS = Object.freeze({
  prefix: '[ERROR]',
  whitespace: '공백은 입력할 수 없습니다.\n',
  invalidNamesForm: '이름은 쉼표로 구분하여 작성해 주세요.\n',
  invalidNameCount: '이름은 최소 2개 최대 5개 까지만 입력 가능합니다.\n',
  invalidNameLength: '이름은 최소 2자 최대 4자 까지만 입력 가능합니다.\n',
});

const INPUTS = Object.freeze({
  names: '코치의 이름을 입력해 주세요. (, 로 구분)\n',
  hateMenus(name) {
    return `\n${name}(이)가 못 먹는 메뉴를 입력해 주세요.\n`;
  },
});

const OUTPUTS = Object.freeze({
  start: '점심 메뉴 추천을 시작합니다.\n',
  result: '메뉴 추천 결과입니다.',
  week: '[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]',
  printCategories() {},
  printMenus() {},
  end: '\n추천을 완료했습니다.',
});

export { ERRORS, INPUTS, OUTPUTS };
