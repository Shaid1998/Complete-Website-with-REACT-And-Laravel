import React from 'react';
import HomePage from './pages/HomePage';
import PageTop from './components/PageTop/PageTop';
import TopNavigation from './components/TopNavigation/TopNavigation';




function App() {
  return (
    <div>
      <TopNavigation />
      <PageTop pagetitle='About Me'/>
    </div>
  );
}

export default App;
