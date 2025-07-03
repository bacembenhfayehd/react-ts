import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Bienvenue dans notre boutique</h1>
        <p>Exploreze les produits disponibles !</p>
        <Link to='/products'><button>products</button></Link>
        <Link to='/cart'><button>cart</button></Link>
       
    </div>
  )
}

export default Home