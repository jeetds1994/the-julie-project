import React from 'react'

const Product = ({url}) => {
  return(
    <div className="productSections">
      <img src={url} alt="product" />
    </div>
  )
}

export default Product
