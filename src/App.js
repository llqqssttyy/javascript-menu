import RecommendController from './service/RecommendController.js';
import RecommendService from './service/RecommendService.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';

class App {
  async play() {
    const controller = new RecommendController(
      new InputView(),
      new OutputView(),
      new RecommendService()
    );
    await controller.run();
  }
}

export default App;
