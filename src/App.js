import React, { useState } from 'react';
import HeaderSection from './components/HeaderSection';
import WelcomeContent from './components/WelcomeContent'

const App = () => {
  const [showContent, setShowContent] = useState(false)
  return (
    <div className='font-display bg-slate-800 text-white'>
      {/* {!showContent && <WelcomeContent setShowContent={setShowContent}/>} */}
      {!showContent &&  <HeaderSection />}
    </div>
  );
};

export default App;