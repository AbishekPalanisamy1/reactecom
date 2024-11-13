import React from 'react'

import {Row,Col} from 'react-bootstrap'

import products from '../products'

import ProductDetails from '../components/ProductsDetails'



const HomeScreen = () => {
  return (
    <div>
        <h2>Latest Productss</h2>
        <Row>
            {products.map((product)=>
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                      <ProductDetails product={product}/>
            </Col>   
         )}
        </Row>
    </div>
  )
}

export default HomeScreen