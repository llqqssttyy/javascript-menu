import { Console } from '@woowacourse/mission-utils';
import { OUTPUTS } from '../statics/messages.js';

class OutputView {
  printStartGuide() {
    const { startGuide } = OUTPUTS;
    Console.print(startGuide);
  }
}

export default OutputView;
