import React, { type FC } from 'react'
import type { ProductProps } from '../types/products'
import { Link } from 'react-router-dom'

const ProductCard:FC<ProductProps> = ({id,title,price,image}) => {
  return (
    <Link to={`/products/${id}`}>
    <div>
        <img src={image} width={100} height={100} alt="" />
        <h2>{title}</h2>
        <p>{price}</p>

    </div>
    </Link>
  )
}

export default ProductCard