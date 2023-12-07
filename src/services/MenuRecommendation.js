import { handleException } from '../utils/handleException.js';

class MenuRecommendation {
  #inputView;

  #outputView;

  #scehduler;

  constructor(inputView, outputView, scehduler) {
    this.#inputView = inputView;
    this.#outputView = outputView;
    this.#scehduler = scehduler;
  }

  async run() {
    this.#outputView.printStart();

    await handleException(async () => await this.#generateCoaches());
  }

  async #generateCoaches() {
    const coachesName = await this.#inputView.getCoachesName();
    this.#scehduler.coaches = coachesName;
  }
}

export default MenuRecommendation;
