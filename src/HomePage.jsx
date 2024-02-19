

import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import { Card, Button, Navbar, Container, Nav, FormControl, InputGroup, Carousel } from 'react-bootstrap';
import { CartContext } from './cartContext';
import './main.css'




function Home() {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://dummyjson.com/products').then((response) => {
      setProducts(response.data.products.slice(0, 15));
    });
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <>
       <Navbar bg="light" data-bs-theme="light" >
        <Container>
          {/* <Navbar.Brand as={Link} to="/">Home</Navbar.Brand> */}
          <Nav className="me-auto">
            {/* <NavLink to="/products" className="nav-link" activeClassName="active">Products</NavLink> */}
            <NavLink to="/cart" className="nav-link" activeClassName="active" style={{float:'right',fontSize:'20px'}}>show Cart</NavLink>
            {/* <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink> */}
          </Nav>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search item"
              className="me-2"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{borderRadius:'5px' ,height:'25px'}}
            />
           <Button variant="dark">Search</Button>
          </InputGroup>
        </Container>
      </Navbar> 
      
{/* 
      {searchTerm === '' ? (
        <Carousel style={{ width: '90%', margin: 'auto' }}>
          <Carousel.Item>
            <img src='https://dixplore.com/wp-content/uploads/2020/03/ugztxggoyfvew2pptewkti.jpg' style={{ width: '100%', height: '600px', objectFit: 'cover' }} alt='carousel-item' />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src='https://www.dekhnews.com/wp-content/uploads/2020/11/Apple-Foldable-iPhone-Release-Date-Images.jpg' style={{ width: '100%', height: '600px', objectFit: 'cover' }} alt='carousel-item' />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src='http://i.huffpost.com/gen/1105939/images/o-BEST-PERFORMING-WINDOWS-LAPTOP-facebook.jpg' style={{ width: '100%', height: '600px', objectFit: 'cover' }} alt='carousel-item' />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      ) : null} */}

      <div className="home-container">
        {searchTerm === '' ? (
          <h2 className="side-heading" style={{fontSize:'50px',fontFamily:'monospace'}}>Featued Products</h2>
        ) : null}
        <div className="product-container">
          {filteredProducts.map((product, index) => (
            <div style={{backgroundColor:'black',marginBottom:'20px',borderRadius:'20px'}}>
            <Card key={product.id} className="product-card text-white bg-dark mb-4" style={{ marginLeft: '30px'}}>
              <Card.Img variant="top" src={product.thumbnail} alt={product.title} width={200} />
              <Card.Body style={{color:'white'}}>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Link to={`/product/${product.id}`}>
                  <Button variant="Success" className="details-button">
                    Details
                  </Button>
                </Link>
                <Button variant="Success" onClick={() => handleAddToCart(product)} className="add-to-cart-button">
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
            </div>
          //   <div key={product.id} className=" product-card col-lg-3 col-md-4 col-sm-6">
          //   <div className="card text-white bg-dark mb-4"  style={{width: '16rem', height:"22rem" , textAlign:"center",marginRight:'10px' }}>
          //     <img src={each.thumbnail} className="card-img-top" alt={each.title} style={{ height: '150px', objectFit: 'cover' }} />
          //     <div className="card-body">
          //       <h5 className="card-title"   style={{height:'50px'}}>{each.title}</h5>
          //       <p className="card-text" style={{height:'50px'}}>INR :{each.price}</p>
          //       <Link to={`/details/${index}`}>
          //       <button  className="btn btn-light">Product Details</button>
          //       </Link>
               
          //       <button  className="btn btn-light" onClick={()=>{addtoCart(index)}}>ADD TO CART</button>
                
          //     </div>
          //   </div>
          // </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;