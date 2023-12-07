import Scheduler from './domains/Scheduler.js';
import MenuRecommendation from './services/MenuRecommendation.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';

class App {
  async play() {
    const service = new MenuRecommendation(
      new InputView(),
      new OutputView(),
      new Scheduler(),
    );
    await service.run();
  }
}

export default App;
