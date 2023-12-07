import { Console } from '@woowacourse/mission-utils';
import { INPUTS } from '../constants/messages.js';

class InputView {
  async getCoachesName() {
    const coachesName = await Console.readLineAsync(INPUTS.coachName);

    Console.print('\n');

    return coachesName;
  }

  async getExcludedMenus(coachName) {
    const excludedMenus = await Console.readLineAsync(
      INPUTS.excludedMenus(coachName),
    );

    Console.print('\n');

    return excludedMenus;
  }
}

export default InputView;
