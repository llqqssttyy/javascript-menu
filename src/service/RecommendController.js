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
    await handleException(() => this.#initiateCoaches());
    await handleException(() => this.#initiateHateMenus());

    this.#recommend();

    this.#printRecommendResult();
  }

  #recommend() {
    this.#recommendService.pickCategories();
    this.#recommendService.pickRecommendMenus();
  }

  async #initiateCoaches() {
    const input = await this.#inputView.getNames();
    this.#recommendService.generateCoaches(input);
  }

  async #initiateHateMenus() {
    const { coaches } = this.#recommendService;

    const hateMenus = [];
    for (const name of coaches) {
      const input = await this.#inputView.getHateMenus(name);
      hateMenus.push(input);
    }

    this.#recommendService.initiateHateMenus(hateMenus);
  }

  #printRecommendResult() {
    const { categories, recommendResults } = this.#recommendService;
    this.#outputView.printRecommendResult(categories, recommendResults);
  }
}

export default RecommendController;
