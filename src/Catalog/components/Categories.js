import React from 'react'

const Categories = () => {
  return(
    <div className="categories">
      <div className="title">Categories</div>
      <div>
        <input type="checkbox" id="menCheck" name="subscribe" value="newsletter" />
        <label for="menCheck">Men</label>
      </div>

      <div>
        <input type="checkbox" id="womenCheck" name="subscribe" value="newsletter" />
        <label for="womenCheck">Women</label>
      </div>

      <div>
        <input type="checkbox" id="boysCheck" name="subscribe" value="newsletter" />
        <label for="boysCheck">Boys</label>
      </div>

      <div>
        <input type="checkbox" id="girlsCheck" name="subscribe" value="newsletter" />
        <label for="girlsCheck">Girls</label>
      </div>

    </div>
  )
}

export default Categories
