import { Console } from '@woowacourse/mission-utils';
import { OUTPUTS } from '../constants/messages.js';

class OutputView {
  printStart() {
    const { start } = OUTPUTS;
    Console.print(start());
  }

  printResult(categories, results) {
    const { printCategories, printRecommendedMenus } = OUTPUTS;

    Console.print('메뉴 추천 결과입니다.');
    Console.print('[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]');
    Console.print(printCategories(categories));

    results.forEach(({ name, menus }) => {
      Console.print(printRecommendedMenus({ name, menus }));
    });

    Console.print('\n추천을 완료했습니다.');
  }
}

export default OutputView;
