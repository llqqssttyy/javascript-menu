import { handleException } from '../utils/handleExeption.js';

class RecommentService {
  #inputView;

  #outputView;

  #menuRecommend;

  constructor(inputView, outputView, menuRecommend) {
    this.#inputView = inputView;
    this.#outputView = outputView;
    this.#menuRecommend = menuRecommend;
  }

  async start() {
    this.#outputView.printStartGuide();

    await handleException(async () => this.#generateCoaches());
    await handleException(async () => this.#setHateMenus());
  }

  async #generateCoaches() {
    const names = await this.#inputView.getCoachesName();
    this.#menuRecommend.coaches = names;
  }

  async #setHateMenus() {
    const { coaches } = this.#menuRecommend;

    const hateMenus = coaches.reduce((hateMenus, coach) => {
      const name = coach.name;
      const userInput = this.#inputView.getHateMenus(name);
      return (hateMenus[name] = userInput);
    }, {});

    this.#menuRecommend.setHateMenus(hateMenus);
  }
}

export default RecommentService;
