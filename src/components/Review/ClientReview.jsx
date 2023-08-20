import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import RestClient from '../../RestAPI/RestClient.js'
import AppURL from '../../RestAPI/AppURL.js'

class ClientReview extends Component {
  constructor(){
      super();
      this.state={
        reviewData:[]
      }
    }
    componentDidMount(){
      RestClient.GetRequest(AppURL.ClientReview).then(result=>{
        this.setState({reviewData:result});
      }).catch(error=>{
        this.setState({title:'???',subtitle:'???'})
      })
    }
    render() {
    var settings = {
        autoPlaySpeed:3000,
        autoPlay: true,
        dots: true,
        infinite: true,
        speed: 3000,
        arrows:false,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

    const MyList = this.state.reviewData;
        const MyView = MyList.map(MyList=>{
          return <div>
                    <Row className='text-center justify-content-center'>
                      <Col lg={6} md={6} sm={12}>
                          <img className='circleImg' src={MyList.Client_img} />
                          <h1 className='ReviewName'>{MyList.Client_title}</h1>
                          <p className='ReviewDescription'>{MyList.Client_description}</p>
                      </Col>
                    </Row>
                  </div>

        })
    
    return (
      <Fragment>
        <Container fluid={true} className='text-center sideBack'>
            <h1 className='clientReviewTitle'>TESTIMONIAL</h1>
            <div className='bottom1'></div>
            <Slider {...settings}>
                {MyView}
            </Slider>
        </Container>
      </Fragment>
    )
  }
}

export default ClientReview