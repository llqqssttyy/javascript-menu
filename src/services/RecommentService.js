import { handleException } from '../utils/handleExeption.js';

class RecommentService {
  #inputView;

  #outputView;

  #menuRecommend;

  constructor(inputView, outputView) {
    this.#inputView = inputView;
    this.#outputView = outputView;
  }

  async start() {
    this.#outputView.printStartGuide();

    await handleException(async () => this.#generateCoaches());
  }

  async #generateCoaches() {
    const names = await this.#inputView.getCoachesName();
  }
}

export default RecommentService;
