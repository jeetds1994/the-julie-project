import React from 'react'


import Product from './Product'
const Products = ({data}) => {

  let productHTML = data.map(url => <Product url={url}/>)

  debugger
  return(
    <div className="products">
      <div className="title">Products</div>
      <div className="productList">
        {productHTML}
      </div>
    </div>
  )
}

export default Products
