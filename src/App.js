import React from 'react';
import TopBanner from './components/TopBanner/TopBanner.jsx';
import Services from './components/Services/Services.jsx';
import TopNavigation from './components/TopNavigation/TopNavigation.jsx';
import Analysis from './components/Analysis/Analysis.jsx';
import Summary from './components/Summary/Summary.jsx';
import Projects from './components/Projects/Projects.jsx';
import Videos from './components/Video/Videos.jsx';



function App() {
  return (
    <div>
      <TopNavigation />
      <TopBanner />
      <Services />
      <Analysis />
      <Summary />
      <Projects />
      <Videos />
    </div>
  );
}

export default App;
