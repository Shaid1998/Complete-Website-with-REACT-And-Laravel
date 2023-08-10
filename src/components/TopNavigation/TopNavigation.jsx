import React, { Component, Fragment } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import WhiteLogo from '../../asset/image/white.png'
import BlackLogo from '../../asset/image/Dark.png'

class TopNavigation extends Component {
    constructor(){
        super();
        this.state={
             navBarTitle:"NavTitle",
             navBarLogo: [WhiteLogo]
        }
   }

   onScroll=()=>{
    if(window.scrollY>100){
         this.setState({navBarTitle:'NavTitleScroll', navBarLogo:[BlackLogo]})

    }else if(window.scrollY<100){

         this.setState({navBarTitle:'navTitle', navBarLogo:[WhiteLogo]})
    }
}

    componentDidMount(){
         window.addEventListener('scroll',this.onScroll)
    }
  render() {
    return (
      <Fragment>
        <Navbar collapseOnSelect fixed='top' expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand className={this.state.navBarTitle}  href="#home"><img className='iconImage' src={this.state.navBarLogo}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">HOME</Nav.Link>
                    <Nav.Link href="#deets">ABOUT</Nav.Link>
                    <Nav.Link href="#deets">SRVICES</Nav.Link>
                    <Nav.Link href="#deets">PROJECTS</Nav.Link>
                    <Nav.Link href="#deets">PORTFOLIO</Nav.Link>
                    <Nav.Link href="#deets">CONTACT</Nav.Link>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
      </Fragment>
    )
  }
}

export default TopNavigation