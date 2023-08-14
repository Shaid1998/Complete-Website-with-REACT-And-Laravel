import React, { Component, Fragment } from 'react'
import TopBanner from '../components/TopBanner/TopBanner.jsx';
import Services from '../components/Services/Services.jsx';
import TopNavigation from '../components/TopNavigation/TopNavigation.jsx';
import Analysis from '../components/Analysis/Analysis.jsx';
import Summary from '../components/Summary/Summary.jsx';
import Projects from '../components/Projects/Projects.jsx';
import Videos from '../components/Video/Videos.jsx';
import ClientReview from '../components/Review/ClientReview.jsx';
import AboutMe from '../components/AboutMe/AboutMe.jsx';
import Footer from '../components/Footer/Footer.jsx';

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title='home'/>
        <TopBanner />
        <Services />
        <Analysis />
        <Summary />
        <Projects />
        <Videos />
        <ClientReview />
        <AboutMe />
        <Footer />
      </Fragment>
    )
  }
}

export default HomePage