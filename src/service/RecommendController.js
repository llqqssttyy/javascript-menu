import { handleException } from '../utils/handleException.js';

class RecommendController {
  #inputView;

  #outputView;

  #recommendService;

  constructor(inputView, outputView, recommendService) {
    this.#inputView = inputView;
    this.#outputView = outputView;
    this.#recommendService = recommendService;

    this.#outputView.printStart();
  }

  async run() {
    await handleException(() => this.#setCoaches());
    await handleException(() => this.#setHateMenus());

    this.#recommend();

    this.#printRecommendResult();
  }

  async #setCoaches() {
    const input = await this.#inputView.getNames();
    this.#recommendService.setCoaches(input);
  }

  async #setHateMenus() {
    const { coaches } = this.#recommendService;

    const hateMenus = [];
    for (const name of coaches) {
      const input = await this.#inputView.getHateMenus(name);
      hateMenus.push(input);
    }

    this.#recommendService.setHateMenus(hateMenus);
  }

  #recommend() {
    this.#recommendService.pickCategories();
    this.#recommendService.pickRecommendMenus();
  }

  #printRecommendResult() {
    const { categories, recommendResults } = this.#recommendService;
    this.#outputView.printRecommendResult(categories, recommendResults);
  }
}

export default RecommendController;
