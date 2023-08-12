import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

class ClientReview extends Component {
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
    return (
      <Fragment>
        <Container fluid={true} className='text-center sideBack'>
            <h1 className='clientReviewTitle'>TESTIMONIAL</h1>
            <div className='bottom1'></div>
            <Slider {...settings}>
                <div>
                    <Row className='text-center justify-content-center'>
                        <Col lg={6} md={6} sm={12}>
                            <img className='circleImg' src='https://img.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19636.jpg?w=996&t=st=1691840550~exp=1691841150~hmac=7fd050fe963d2ec27ec51c1f363cb2b30191790e69f3a4f7a1871430ee0530fe' />
                            <h1 className='ReviewName'>Md. Shaidur Rahman</h1>
                            <p className='ReviewDescription'>As a recent graduate with a Bachelor of Science in Software Engineering from Daffodil International University, I possess a strong foundation in programming languages, including PHP, JavaScript, and SQL. Although I may be an entry-level candidate, I am confident that my skills and enthusiasm make me an excellent candidate for this position. </p>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row className='text-center justify-content-center'>
                        <Col lg={6} md={6} sm={12}>
                            <img className='circleImg' src='https://img.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19636.jpg?w=996&t=st=1691840550~exp=1691841150~hmac=7fd050fe963d2ec27ec51c1f363cb2b30191790e69f3a4f7a1871430ee0530fe' />
                            <h1 className='ReviewName'>Md. Shaidur Rahman</h1>
                            <p className='ReviewDescription'>As a recent graduate with a Bachelor of Science in Software Engineering from Daffodil International University, I possess a strong foundation in programming languages, including PHP, JavaScript, and SQL. Although I may be an entry-level candidate, I am confident that my skills and enthusiasm make me an excellent candidate for this position. </p>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row className='text-center justify-content-center'>
                        <Col lg={6} md={6} sm={12}>
                            <img className='circleImg' src='https://img.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19636.jpg?w=996&t=st=1691840550~exp=1691841150~hmac=7fd050fe963d2ec27ec51c1f363cb2b30191790e69f3a4f7a1871430ee0530fe' />
                            <h1 className='ReviewName'>Md. Shaidur Rahman</h1>
                            <p className='ReviewDescription'>As a recent graduate with a Bachelor of Science in Software Engineering from Daffodil International University, I possess a strong foundation in programming languages, including PHP, JavaScript, and SQL. Although I may be an entry-level candidate, I am confident that my skills and enthusiasm make me an excellent candidate for this position. </p>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row className='text-center justify-content-center'>
                        <Col lg={6} md={6} sm={12}>
                            <img className='circleImg' src='https://img.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19636.jpg?w=996&t=st=1691840550~exp=1691841150~hmac=7fd050fe963d2ec27ec51c1f363cb2b30191790e69f3a4f7a1871430ee0530fe' />
                            <h1 className='ReviewName'>Md. Shaidur Rahman</h1>
                            <p className='ReviewDescription'>As a recent graduate with a Bachelor of Science in Software Engineering from Daffodil International University, I possess a strong foundation in programming languages, including PHP, JavaScript, and SQL. Although I may be an entry-level candidate, I am confident that my skills and enthusiasm make me an excellent candidate for this position. </p>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row className='text-center justify-content-center'>
                        <Col lg={6} md={6} sm={12}>
                            <img className='circleImg' src='https://img.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19636.jpg?w=996&t=st=1691840550~exp=1691841150~hmac=7fd050fe963d2ec27ec51c1f363cb2b30191790e69f3a4f7a1871430ee0530fe' />
                            <h1 className='ReviewName'>Md. Shaidur Rahman</h1>
                            <p className='ReviewDescription'>As a recent graduate with a Bachelor of Science in Software Engineering from Daffodil International University, I possess a strong foundation in programming languages, including PHP, JavaScript, and SQL. Although I may be an entry-level candidate, I am confident that my skills and enthusiasm make me an excellent candidate for this position. </p>
                        </Col>
                    </Row>
                </div>
            </Slider>
        </Container>
      </Fragment>
    )
  }
}

export default ClientReview