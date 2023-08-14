import React, { Component } from 'react'
import { Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import ContactSection from '../components/ContactSection/ContactSection'
import Footer from '../components/Footer/Footer'

class AllServices extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title='services'/>
        <PageTop pagetitle='MY SERVICES' />
        <ContactSection />
        <Footer />
      </Fragment>
    )
  }
}

export default AllServices