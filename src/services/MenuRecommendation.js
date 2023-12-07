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

    await handleException(async () => await this.#getCoaches());
    await handleException(async () => await this.#getExcludedMenus());
  }

  async #getCoaches() {
    const coachesName = await this.#inputView.getCoachesName();
    this.#scehduler.coaches = coachesName;
  }

  async #getExcludedMenus() {
    const excludedMenus = [];

    for (const name of this.#scehduler.coachesName) {
      excludedMenus.push(await this.#inputView.getExcludedMenus(name));
    }
    this.#scehduler.setCoachesExcludedMenus(excludedMenus);
  }
}

export default MenuRecommendation;
