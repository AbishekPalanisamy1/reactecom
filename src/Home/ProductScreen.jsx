
import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../products';
import Ratings from '../components/Ratings';
import './homescreen.css'
import { Card, Image } from 'react-bootstrap';
const ProductScreen = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-container">
<Image src={product.image} alt={product.name} fluid/>
    
   
    
     <div className="product-details">
        <h1 className="product-name">{product.name}</h1>
        <p className="product-description">{product.description}</p>
        <p className="product-brand">{product.brand}</p>
        <div className="product-rating">
          <Ratings value={product.rating} text={`${product.rating} Reviews`} color="#f8e825" />
        </div>
        <p>Price:{product.price}</p>
      </div>
    </div>
  );
};

export default ProductScreen;
