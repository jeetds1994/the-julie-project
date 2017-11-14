import React from 'react'

import Promo from './components/Promo'
import Products from './components/Products'

import Categories from './components/Categories'

import './Catalog.css'

var data = require("./data.json").data

const Catalog = () => {
  return(
    <div className="content">
      <Promo />

      <div className="productInformation">
        <Categories />
        <Products data={data}/>
      </div>
    </div>
  )
}

export default Catalog
