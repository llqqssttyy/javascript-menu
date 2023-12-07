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

    this.#recomendMenus();

    this.#outputView.printResult(
      this.#scehduler.categories,
      this.#scehduler.result,
    );
  }

  async #getCoaches() {
    const coachesName = await this.#inputView.getCoachesName();
    this.#scehduler.coaches = coachesName;
  }

  // TODO: 반복문 돌리는 로직 run 함수로 옮기기
  async #getExcludedMenus() {
    const excludedMenus = [];

    for (const name of this.#scehduler.coachesName) {
      excludedMenus.push(await this.#inputView.getExcludedMenus(name));
    }
    this.#scehduler.setCoachesExcludedMenus(excludedMenus);
  }

  #recomendMenus() {
    this.#scehduler.recommendMenus();
  }
}

export default MenuRecommendation;
