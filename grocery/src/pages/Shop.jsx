import React, {useState} from 'react';
import CommonSection from '../components/UI/CommonSection';
import {Container, Row, Col} from 'reactstrap';

import ProductsList from '../components/UI/ProductList';
import products from '../assets/data/products';
import '../styles/shop.css';

import Helmet from '../components/Helmet/Helmet';

const Shop = () => {

  const [productsData, setProductsData] = useState(products);
  const handleFilter = e => {
      const filterValue = e.target.value;
      if(filterValue === 'Fruit'){
        const filterProducts = products.filter((item) => item.category === 'Fruit');

        setProductsData(filterProducts);
      }

      if(filterValue === 'drinks'){
        const filterProducts = products.filter((item) => item.category === 'Drinks');

        setProductsData(filterProducts);
      }

      if(filterValue === 'vegetables'){
        const filterProducts = products.filter((item) => item.category === 'Vegetables');

        setProductsData(filterProducts);
      }

      if(filterValue === 'Others'){
        const filterProducts = products.filter((item) => item.category === 'watch');

        setProductsData(filterProducts);
      }

      
  }

  const handleSearch = e => {
    const searchTerm = e.target.value;
    const searchProducts = products.filter((item)=> item.productName.toLowerCase().includes(searchTerm.toLowerCase()));
    setProductsData(searchProducts);
  }
  return <Helmet title='Shop'>

    <CommonSection title='products'/>


<section>
    <Container>
      <Row>
        <Col lg='3' md='6'>
          <div className='filter__widget'>
            <select onChange={handleFilter}>
              <option>Filter By Category</option>
              <option value='Fruit'>Fruits</option>
              <option value='vegetables'>Vegetables</option>
              <option value='drinks'>Drinks</option>
              <option value='Others'>Others</option>
            </select>
          </div>
        </Col>

        <Col lg='3' md='12' className='text-end'>
        <div className='filter__widget'>
            <select>
              <option>Sorted By</option>
              <option value='ascending'>Ascending</option>
              <option value='descending'>Descending</option>
            </select>
          </div>
        </Col>

        <Col lg='6' md='6'>
          <div className='search__box'>
            <input type='text' placeholder='Search...' onChange={handleSearch} />
            <span><i className='ri-search-line'></i></span>
          </div>
        </Col>
      </Row>
    </Container>
    </section>

    <section className='pt-0'>
      <Container>
        <Row>
          {
            productsData.length === 0? <h1 className='text-center fs-4'>No Product Found!</h1> :
            <ProductsList data={productsData}/>
          }
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Shop;
