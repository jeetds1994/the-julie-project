import React from 'react'

import Slider from 'react-slick'

const Carousel = ({data}) => {

  //data contains all of the image urls

  // let images = data.map(url => {
  //   return `
  //   <div>
  //     <img src="${url}" alt="image"/>
  //   </div>`
  // }).join(" ")
  // debugger

  var settings = {
      speed: 100,
      arrows: false,
      autoplay: true,
      centerPadding: 0,
      centerMode: true
    };

  return(
    <div className="carousel">
      <Slider {...settings}>
        <div>
          <img src="https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?h=350&auto=compress&cs=tinysrgb" alt="image1"/>
        </div>
        <div>
          <img src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?h=350&auto=compress&cs=tinysrgb" alt="image1"/>
        </div>
        <div>
          <img src="https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?h=350&auto=compress&cs=tinysrgb" alt="image1"/>
        </div>
        <div>
          <img src="https://images.pexels.com/photos/206470/pexels-photo-206470.jpeg?h=350&auto=compress&cs=tinysrgb" alt="image1"/>
        </div>
        <div>
          <img src="https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg?h=350&auto=compress&cs=tinysrgb" alt="image1"/>
        </div>
        <div>
          <img src="https://images.pexels.com/photos/404159/pexels-photo-404159.jpeg?h=350&auto=compress&cs=tinysrgb" alt="image1"/>
        </div>
        <div>
          <img src="https://images.pexels.com/photos/346744/pexels-photo-346744.jpeg?h=350&auto=compress&cs=tinysrgb" alt="image1"/>
        </div>
        <div>
          <img src="https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?h=350&auto=compress&cs=tinysrgb" alt="image1"/>
        </div>
        <div>
          <img src="https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?h=350&auto=compress&cs=tinysrgb" alt="image1"/>
        </div>
        <div>
          <img src="https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?h=350&auto=compress&cs=tinysrgb" alt="image1"/>
        </div>
        <div>
          <img src="https://images.pexels.com/photos/425125/pexels-photo-425125.jpeg?h=350&auto=compress&cs=tinysrgb" alt="image1"/>
        </div>
        <div>
          <img src="https://images.pexels.com/photos/247204/pexels-photo-247204.jpeg?h=350&auto=compress&cs=tinysrgb" alt="image1"/>
        </div>
        <div>
          <img src="https://images.pexels.com/photos/206461/pexels-photo-206461.jpeg?h=350&auto=compress&cs=tinysrgb" alt="image1"/>
        </div>
        <div>
          <img src="https://images.pexels.com/photos/413727/pexels-photo-413727.jpeg?h=350&auto=compress&cs=tinysrgb" alt="image1"/>
        </div>
        <div>
          <img src="https://images.pexels.com/photos/285171/pexels-photo-285171.jpeg?h=350&auto=compress&cs=tinysrgb" alt="image1"/>
        </div>
      </Slider>
      <button id="catalog">See Catalog</button>
    </div>
  )
}

export default Carousel
