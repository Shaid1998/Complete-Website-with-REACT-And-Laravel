import React from 'react';
import HomePage from './pages/HomePage';
import PageTop from './components/PageTop/PageTop';
import TopNavigation from './components/TopNavigation/TopNavigation';
import AboutDescription from './components/AboutDescription/AboutDescription';




function App() {
  return (
    <div>
      <TopNavigation />
      <PageTop pagetitle='About Me'/>
      <AboutDescription />
    </div>
  );
}

export default App;
