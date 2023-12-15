import { Console } from '@woowacourse/mission-utils';
import { INPUTS } from '../statics/messages.js';

class InputView {
  async getNames() {
    const names = await Console.readLineAsync(INPUTS.names);
    return names;
  }

  async getHateMenus(name) {
    const hateMenus = await Console.readLineAsync(INPUTS.hateMenus(name));
    return hateMenus;
  }
}

export default InputView;
