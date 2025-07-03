import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext';
import type { Product } from '../types/products';

const ProductDetails = () => {
  const {id} = useParams<{id:string}>();
  const [product,setProduct] = useState<Product | null>(null)
  const {addToCart} = useCart();

  useEffect(()=> {
    fetch('/src/data/products.json')
    .then((res) => res.json())
    .then((data:Product[]) => {
      const foundPdt = data.find((p) => p.id === Number(id))
      setProduct(foundPdt || null)
    })
  },[id])

  if(!product) return <p>Product not found</p>

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>{product.price}TND</p>
      <button onClick={() => addToCart(product)}>Ajouter au panier</button>

    </div>
  )
}

export default ProductDetails