import React, { Component, Fragment } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


class TopNavigation extends Component {
    constructor(){
        super();
        this.state={
             navBarTitle:"navTitle"
        }
   }

   onScroll=()=>{
    if(window.scrollY>100){
         this.setState({navBarTitle:'navTitleScroll',navBarBack:'navBackgroundScroll',navBarItem:'navItemScroll',navVariant:'light'})

    }else if(window.scrollY<100){

         this.setState({navBarTitle:'navTitle',navBarBack:'navBackground',navBarItem:'navItem',navVariant:'dark'})
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
                <Navbar.Brand className={this.state.navBarTitle}  href="#home">My Company</Navbar.Brand>
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