import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../styles/dashboard.css';
import useGetData from '../custom-hooks/useGetData';
import { Link } from 'react-router-dom';
import ProductList from './ProductList';
const Dashboard = () => {

  const {data: products} = useGetData('products');
  const {data: users} = useGetData('users');


  return (
    <>
      <section>
      <Container>
        <Row>
          <Col className='lg=3'>
            <div className='revenue__box'>
              <h5>Total Sales</h5>
              <span>{products.length}</span>
            </div>
          </Col>
          <Col className='lg=3'>
              <div className='order__box'>
                <h5>Orders</h5>
              <span>$789</span>
            </div>
          </Col>
          <Col className='lg=3'>
          <div className='product__box'>
              <h5>Total Products</h5>
              <span>{products.length}</span>
            </div>
          </Col>
          <Col className='lg=3'>
            <div className='user__box'>
              <h5>Total Users</h5>
              <span>{users.length}</span>
            </div>
          </Col>
        </Row>
        <ProductList />
        <button style={{marginTop: '5%', borderRadius: '20px',padding: '1%'}}><Link to='/dashboard/add-product'>Add Products</Link></button>
        <button style={{marginTop: '5%', borderRadius: '20px',padding: '1%', marginLeft: '1%'}}><Link to='/home'>Back to Home</Link></button>
      </Container>
    </section>
    </>
  )
}

export default Dashboard;
