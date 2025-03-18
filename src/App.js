import React, { useState } from 'react';
import HeaderSection from './components/HeaderSection';
import WelcomeContent from './components/WelcomeContent';
import {BRIGHT_MODE_ICON, DARK_MODE_ICON} from './utils/constant';

const App = () => {
  const [showContent, setShowContent] = useState(false);
  const [dark, setDark] = React.useState(false);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
}
  return (
    <div className='font-display text-black max-lg:p-10 overflow-x-hidden bg-white dark:bg-black dark:text-white'>
      <button className="mode-switch" onClick={()=> darkModeHandler()}>
        <img src={dark ? DARK_MODE_ICON : BRIGHT_MODE_ICON} alt="my image" className='w-7' />
      </button>
      {!showContent && <WelcomeContent setShowContent={setShowContent}/>}
      {showContent &&  <HeaderSection />}
    </div>
  );
};

export default App;