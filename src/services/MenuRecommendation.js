import { handleException } from '../utils/handleException.js';

class MenuRecommendation {
  #inputView;

  #outputView;

  constructor(inputView, outputView) {
    this.#inputView = inputView;
    this.#outputView = outputView;
  }

  async run() {
    this.#outputView.printStart();

    await handleException(async () => await this.#generateCoaches());
  }

  async #generateCoaches() {
    const coachesName = await this.#inputView.getCoachesName();
  }
}

export default MenuRecommendation;
