import Validate from '../domain/validators/Validate.js';
import { SEPERATOR } from '../statics/constants.js';
import Coach from '../domain/models/Coach.js';

class RecommendService {
  #coaches;

  constructor(coaches) {
    this.#coaches = coaches;
  }

  generateCoaches(input) {
    Validate.namesForm(input);
    this.#coaches = input.split(SEPERATOR).map((name) => new Coach(name));
  }
}

export default RecommendService;
