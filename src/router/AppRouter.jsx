import React, { Component } from 'react'
import { Fragment } from 'react'
import {BrowserRouter as Router, Routes, Switch, Route, Link } from 'react-router-dom'
import HomePage from'../pages/HomePage'
import AboutPage from'../pages/AboutPage'
import AllServices from '../pages/AllServices'
import Project from'../pages/Project'
import Portfolio from'../pages/Portfolio'
import Contact from'../pages/Contact'

export class AppRouter extends Component {
  render() {
    return ( 
      <Fragment>
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/service" element={<AllServices />}></Route>
            <Route path="/recent_project" element={<Project />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/contact" element={<Contact />}> </Route>
        </Routes>
      </Fragment>
    )
  }
}

export default AppRouter