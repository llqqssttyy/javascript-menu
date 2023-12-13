import { Console } from '@woowacourse/mission-utils';
import { INPUTS } from '../statics/messages.js';

class InputView {
  async getCoachesName() {
    const coachesName = await Console.readLineAsync(INPUTS.coachesName);
    return coachesName;
  }

  async getHateMenus(name) {
    const hateMenus = await Console.readLineAsync(INPUTS.hateMenus(name));
    return hateMenus;
  }
}

export default InputView;
