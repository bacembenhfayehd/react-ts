import React from 'react'
import { useCart } from '../context/CartContext'

const CartPage = () => {
  const {cart, removeFromCart} = useCart();

  const total  = cart.reduce((sum,item) => sum + item.product.price * item.quantity,0) 
  return (
    <div>
      <h2>Panier</h2>
      {cart.map(({product,quantity}) => (
        <div key={product.id}>
          {product.title} - {quantity} * {product.price} TND
 <button onClick={() => removeFromCart(product.id)}>supprimer</button>
        </div>
      ))}

      <h3>total : {total}</h3>
    </div>
  )
}

export default CartPage