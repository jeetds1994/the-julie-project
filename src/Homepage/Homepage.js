import React from 'react'

import Carousel from './components/Carousel'
import Subscribe from './components/Subscribe'
import './Homepage.css';

var data = require("./carouselData.json").data

const Homepage = () => {
  return(
    <div className="content">
      <Carousel data={data}/>

      <Subscribe />
    </div>
  )
}

export default Homepage
