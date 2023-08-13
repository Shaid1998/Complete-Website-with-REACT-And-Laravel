import React, { Component } from 'react'
import { Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import MyPortfolio from '../components/MyPortfolio/MyPortfolio'
import Footer from '../components/Footer/Footer'

class Portfolio extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation />
        <PageTop pagetitle='MY Portfolio'/>
        <MyPortfolio />
        <Footer />
      </Fragment>
    )
  }
}

export default Portfolio