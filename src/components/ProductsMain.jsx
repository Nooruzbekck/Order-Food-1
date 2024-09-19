import React from 'react'
import "./Products.css"
import { ProductsList } from './ProductsList'

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
