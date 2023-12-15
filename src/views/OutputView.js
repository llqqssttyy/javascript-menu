import { Console } from '@woowacourse/mission-utils';
import { OUTPUTS } from '../statics/messages.js';

class OutputView {
  printStart() {
    Console.print(OUTPUTS.start);
  }
}

export default OutputView;
