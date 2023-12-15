import { Console } from '@woowacourse/mission-utils';
import { INPUTS } from '../statics/messages.js';

class InputView {
  async getNames() {
    const names = await Console.readLineAsync(INPUTS.names);
    return names;
  }
}

export default InputView;
