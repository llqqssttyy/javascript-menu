import { Console } from '@woowacourse/mission-utils';
import { INPUTS } from '../statics/messages.js';

class InputView {
  async getCoachesName() {
    const coachesName = await Console.readLineAsync(INPUTS.coachesName);
    return coachesName;
  }

  async getHateMenus() {
    const hateMenus = await Console.readLineAsync(INPUTS.hateMenus);
    return hateMenus;
  }
}

export default InputView;
