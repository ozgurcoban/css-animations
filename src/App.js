import GlobalStyle from './styles/global';

import RotatingButton from './components/RotatingButton';
import SwipeButton from './components/SwipeButton';
import ButtonHoverEffect from './components/ButtonHoverEffect';
import StretchingButton from './components/StretchingButton';
import SwipeFromBottom from './components/SwipeFromBottom';
import GlowingButton from './components/GlowingButton';
import SwappingButton from './components/SwappingButton';
import TextScalingButton from './components/TextScalingButton';
import CircularSwapButton from './components/CircularSwapButton';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <RotatingButton />
      <SwipeButton />
      <ButtonHoverEffect />
      <StretchingButton />
      <SwipeFromBottom />
      <GlowingButton />
      <SwappingButton />
      <TextScalingButton />
      <CircularSwapButton />
    </div>
  );
}

export default App;
