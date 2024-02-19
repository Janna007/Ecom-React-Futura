import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then((response) => {
        console.log(response)
      setProduct(response.data);
    });
  }, [id]);

  if (!product) {
    return <p>Something Went Wrong!</p>;
  }
  return (
    
    <div style={{  height:'1000px', backgroundColor:'black', justifyContent:'center' ,padding:'100px' ,color:'white'}}>
    <div  >
    <div className="col-lg-3 col-md-4 col-sm-6" style={{marginLeft:'500px'}}>
<div className="card text-white bg-dark mb-4"  style={{width: '32rem', height:"40rem" , textAlign:"center" }}>
  <img src={product.images[0]} className="card-img-top" alt={product.title} style={{ height: '300px', objectFit: 'cover' }} />
  <div className="card-body">
    <h5 className="card-title"   style={{height:'50px'}}>{product.title}</h5>
  
    <p className="card-price" style={{height:'20px'}}>INR :{product.price}</p>
    <p className="card-rating" style={{height:'20px'}}>RATING⭐ :{product.rating}</p>
    <p className="card-disc" style={{height:'20px'}}>{product.discountPercentage} Discount on this product</p>
    <p className="card-text" style={{height:'60px'}}>{product.description}</p>

    <p className="card-brand" style={{height:'20px'}}>BRAND :{product.brand}</p>
   
   
   
  </div>
</div>
</div>
    </div>
</div>
  )
}

export default Details