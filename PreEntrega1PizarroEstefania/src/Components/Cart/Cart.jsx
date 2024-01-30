import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import './Cart.css'


const Cart = () => {
  const { cart, totalPrice } = useCartContext();
  
  if (cart.length === 0) {
    return (
      <div className="Cart-container">
        <p className="Cart-message">Tu carrito está vacío</p>
        <Link className="btn btn-primary mt-3 " to="/">Hacer compras</Link>
      </div>
    );
  }
  
  return (
    <div className="Cart-container">
      <div className="Cart-products">
        {cart.map((product) => (
          <ItemCart key={product.id} product={product} />
        ))}
      </div>
      <p className="Cart-total">Total: $ {totalPrice()}</p>
      <Link to="/checkout">
        <button className="btn-total">Finalizar Compra</button>
      </Link>
    </div>
  );
};

export default Cart;