import MenuRecommendation from './services/MenuRecommendation.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';

class App {
  async play() {
    const service = new MenuRecommendation(new InputView(), new OutputView());
    await service.run();
  }
}

export default App;
