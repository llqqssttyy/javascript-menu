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
    await handleException(() => this.#generateCoaches());
  }

  async #generateCoaches() {
    const input = await this.#inputView.getNames();
    this.#recommendService.generateCoaches(input);
  }
}

export default RecommendController;
