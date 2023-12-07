import { Console } from '@woowacourse/mission-utils';
import { OUTPUTS } from '../constants/messages.js';

class OutputView {
  printStart() {
    const { start } = OUTPUTS;
    Console.print(start());
  }
}

export default OutputView;
