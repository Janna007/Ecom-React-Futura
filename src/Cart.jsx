import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { CartContext } from './cartContext.jsx';
import Card from 'react-bootstrap/Card';


function Cart() {
  const {
    updateQuantity,
    cart,
    removeFromCart,
    
    calculateTotalPrice,
    calculateCartTotal,
  } = useContext(CartContext);

  const handleUpdateQuantity = (productId, newQuantity) => {
    updateQuantity(productId, newQuantity);
  };
  return (
    <div>
       <div>
      <h2>Cart</h2>
      {cart.map((product) => (
        <div key={product.id}>
         
           <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.thumbnail} width={100} height={100} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Title>${product.price}</Card.Title>
        <Card.Text>
        Quantity: {product.quantity}
        </Card.Text>
        <Card.Text>
        Total: ${calculateTotalPrice(product)}
        </Card.Text>
        <Button variant="primary" onClick={() => handleUpdateQuantity(product.id, product.quantity + 1)}>+</Button>
        <Button variant="primary"  onClick={() => handleUpdateQuantity(product.id, product.quantity - 1)}>-</Button>
        <Button variant="primary"  onClick={() => removeFromCart(product.id)}>Remove</Button>
      </Card.Body>
    </Card>
        </div>
      ))}
      <p>Total Cost: ${calculateCartTotal()}</p>
      <Button>Buy Now</Button><br/><br/>
      <Link to="/">
        <Button className="back-to-home">Back to Home</Button>
      </Link>
    </div>
    </div>
  )
}

export default Cart