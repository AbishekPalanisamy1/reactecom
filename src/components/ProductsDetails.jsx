

import React from 'react';
import { Card, CardBody, CardText } from 'react-bootstrap';

import './productdetails.css'
import Ratings from './Ratings';
import { Link } from 'react-router-dom';



const ProductsDetails = ({ product }) => {
  return (
    <div className="my-3 p-3 rounded">
      <Card className="my-1 p-1 rounded">
        <Link to={`/product/${product.id}`}>
          <Card.Img variant="top" src={product.image} className="card-img-top" />
        </Link>
        <CardBody>
          <Link to={`/product/${product.id}`}>
            <strong className="card-title">{product.name}</strong>
          </Link>
        </CardBody>
        <CardText className="reviews-text">
          <div>
            <Ratings value={product.rating} text={`${product.reviews} Reviews`} color={`#f8e825`}/>
          </div>
        </CardText>
        <Card.Text className="price-text">
          ₹: {product.price}
        </Card.Text>
      </Card>
    </div>
  );
};

export default ProductsDetails;
