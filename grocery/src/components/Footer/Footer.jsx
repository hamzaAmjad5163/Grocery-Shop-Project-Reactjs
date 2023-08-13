import React from 'react'
import './footer.css';
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4' className='mb-4' md='6'>
            <div className='logo'>
              <div>
                <h1 className='text-white'>SemPro</h1>
              </div>
            </div>
            <p className='footer__text mt-4'>
                Habibi! Come to Sempro, Where you find all stuff of your choices. Easy "Payment Method" and "Returns". Payment should be "on-Delivery or Online". Your choice! 
                <p>First Come, First Served! Enjoy the Luxury.</p>
              </p>
          </Col>

          <Col lg='3' className='mb-4' md='3'>
            <div className='footer__quick-links'>
              <h4 className='quick__links-title'>Categories</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <a href='#fruit_item'>Fruit</a>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <a href='#vegetables_item'>Vegetables</a>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <a href='#other_item'>Other Items</a>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='2' className='mb-4'>
          <div className='footer__quick-links'>
              <h4 className='quick__links-title'>Useful Links</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>Shop</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart'>Cart</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'>Login</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Privacy Policies!</Link>
                </ListGroupItem>
              </ListGroup>
            </div>

          </Col>

          <Col lg='3' md='4'>
          <div className='footer__quick-links'>
              <h4 className='quick__links-title'>Contact</h4>
              <ListGroup className='footer__contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i className='ri-map-pin-line'></i></span>
                  <p>Qutba Bazar, Kamra Pakistan</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i className='ri-phone-line'></i></span>
                  <p>+92 318-7533356
                  <p>+92 335-7227235</p></p>               
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i className='ri-mail-line'></i></span>
                  <p>hamzakhan5163@gmail.com</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i class="ri-linkedin-box-fill"></i> <a href='https://www.linkedin.com/in/hamza-amjad-0a3aaa228/'>Linked In!</a></span>
                 
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i class="ri-github-fill"></i> <a href='https://github.com/hamzaAmjad5163'>GitHub!</a></span>
                 
                </ListGroupItem>
              </ListGroup>
            </div>

          </Col>

          <Col lg='12'>
            <p className='footer__copyright'>Copyright {year} Developed by SemPro. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;
