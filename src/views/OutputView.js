import { Console } from '@woowacourse/mission-utils';
import { OUTPUTS } from '../statics/messages.js';

class OutputView {
  printStart() {
    Console.print(OUTPUTS.start);
  }

  printRecommendResult(categories, recommendResults) {
    Console.print(OUTPUTS.result);
    Console.print(OUTPUTS.printWeek());
    Console.print(OUTPUTS.printCategories(categories));
    recommendResults.forEach((result) => {
      Console.print(OUTPUTS.printResult(result));
    });

    Console.print(OUTPUTS.end);
  }
}

export default OutputView;
