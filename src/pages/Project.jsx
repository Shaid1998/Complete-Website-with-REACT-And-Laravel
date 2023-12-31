import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import AllProject from '../components/AllProject/AllProject'
import Footer from '../components/Footer/Footer'

class Project extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title='project'/>
        <PageTop pagetitle='Resent Projects'/>
        <AllProject />
        <Footer />
      </Fragment>
    )
  }
}

export default Project