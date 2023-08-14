import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import ContactSection from '../components/ContactSection/ContactSection'
import Footer from '../components/Footer/Footer'

class Contact extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title='contact'/>
        <PageTop pagetitle='Contact Me'/>
        <ContactSection />
        <Footer />
      </Fragment>
    )
  }
}

export default Contact