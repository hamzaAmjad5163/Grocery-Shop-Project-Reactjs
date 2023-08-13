
import React, {useState, useEffect} from 'react';
import Helmet from '../components/Helmet/Helmet';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import veg1 from '../assets/images/veg1.png';
import veg2 from '../assets/images/gro1.png';
import veg3 from '../assets/images/veg2.png';
import veg4 from '../assets/images/veg4.png';

import Clock from '../components/UI/Clock';
import counterImg from '../assets/images/chilli-removebg-preview.png';
import { motion } from 'framer-motion';

import Services from '../services/Services';
import ProductList from '../components/UI/ProductList';

import {Container, Row, Col} from "reactstrap";
import '../styles/home.css';
import { Link } from 'react-router-dom';
import useGetData from '../custom-hooks/useGetData';

const Home = () => {

  const {data: products, loading} = useGetData('products');

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] =useState([]);
  const [wirelessProducts, setWWirelessProducts] = useState([]);

  const year = new Date().getFullYear();

useEffect(()=> {
  const filteredTrendingProducts = products.filter(item => item.category === 'Fruit');
  
  const filteredBestSalesProducts = products.filter(item => item.category === 'Vegetables');

  const filteredMobileProducts = products.filter(item => item.category === 'Drinks');

  const filteredWirelessProducts = products.filter(item => item.category === 'Others');


  
  setTrendingProducts(filteredTrendingProducts);
  setBestSalesProducts(filteredBestSalesProducts);
  setMobileProducts (filteredMobileProducts);
  setWWirelessProducts(filteredWirelessProducts);
},[products]);
const carouselImages = [veg1, veg2, veg3, veg4];
const [backgroundColor, setBackgroundColor] = useState('#FF5733'); // Initial background color

  useEffect(() => {
    // Define an array of colors that you want to rotate
    const colors = ['#FF5733', '#33FF57', '#5733FF', '#FFFF33'];

    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % colors.length;
      setBackgroundColor(colors[currentIndex]);
    }, 3000); // Change the background color every 3 seconds, adjust as needed

    return () => clearInterval(interval);
  }, []);

  return <Helmet title={'Home'}>
    <section className='hero__section' style={{backgroundColor}}>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className='hero__content'>
              <p className='hero__subtitle'> Trending Products in {year}</p>
              <h2 >Make Your Interior More Minimalistic & Modern</h2>
              <p>Habibi! Come to SemPro mall! Get new products and items. Awesome :/ </p>
              <motion.button whileTap={{scale: 1.2 }} className='buy__btn'><Link to='/shop'>Shop Now</Link></motion.button>
            </div>
          </Col>
          <Col lg='6' md='6'>
            <Carousel autoPlay infiniteLoop interval={3000} showThumbs={false} className="hero-carousel" style={{ borderRadius: '20px' }}>
              {carouselImages.map((image, index) => (
              <div key={index} style={{ width: '100%', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: index !== carouselImages.length - 1 ? '10px' : '0' }}>
                <img src={image} alt={`Image${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />
              </div>
             ))}
            </Carousel>
    </Col>
        </Row>
      </Container>
    </section>
    <Services/>
    <section className='trending__product' id='fruit_item'>
      <Container>
        <Row>
          <Col lg='12' className='text__center'>
            <h2 className='section__title'>Fruits</h2>
          </Col>
          {
            loading ? <h4 className='fw-bold'>Loading.....</h4> : 
            <ProductList data={trendingProducts}/>
          }
          
        </Row>
      </Container>
    </section>

    <section className='best__sales' id='vegetables_item'>
      <Container>
      <Row>
          <Col lg='12' className='text__center'>
            <h2 className='section__title'>Vegetables!</h2>
          </Col>
          {
            loading ? <h4 className='fw-bold'>Loading.....</h4> : 
            <ProductList data={bestSalesProducts}/>
          }
          
        </Row>
      </Container>
    </section>

    <section className='timer__count'>
      <Container>
        <Row>
          <Col lg='6' md='12' className='count__down-col'>
          <div className='clock__top-content'>
            <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
            <h3 className='text-white fs-5 mb-3'>Quality Items</h3>
          </div>
            <Clock />
            <motion.button whileTap={{scale:1.2}} className='buy__btn store__btn'><Link to='/shop'>Visit Store</Link></motion.button>
          </Col>
          <Col lg='6' md='12' className='text-end counter__img'>
            <img src={counterImg} alt=''/>
          </Col>
        </Row>
      </Container>
    </section>

    <section className='new__arrivals' id='other_item'>
      <Container>
        <Row>
          <Col lg='12' className='text__center mb-5'>
            <h2 className='section__title'>Other Items!</h2>
          </Col>
          {
            loading ? <h4 className='fw-bold'>Loading.....</h4> : 
            <ProductList data={mobileProducts}/>
          }
          {
            loading ? <h4 className='fw-bold'>Loading.....</h4> : 
            <ProductList data={wirelessProducts}/>
          }
          
        </Row>
      </Container>
    </section>

    
  </Helmet>
  
};

export default Home;
