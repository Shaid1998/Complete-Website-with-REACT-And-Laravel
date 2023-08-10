import React from 'react';
import TopBanner from './components/TopBanner/TopBanner.jsx';
import Services from './components/Services/Services.jsx';
import TopNavigation from './components/TopNavigation/TopNavigation.jsx';
import Analysis from './components/Analysis/Analysis.jsx';


function App() {
  return (
    <div>
      <TopNavigation />
      <TopBanner />
      <Services />
      <Analysis />
    </div>
  );
}

export default App;
