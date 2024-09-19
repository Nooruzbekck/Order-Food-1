import React from 'react'
import { ProductsList } from './ProductsList'
import "./Products.css"
export const ProductsMain = () => {
  return (
  <div className='container-main'>
      <ul className='container-lest'>
      <li>
      <ProductsList/>
      
      </li>
    </ul>
  </div>
  )
}
