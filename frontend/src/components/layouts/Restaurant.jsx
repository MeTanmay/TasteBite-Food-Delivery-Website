import React from 'react'
import { Link } from 'react-router-dom'

export default function Restaurant({restaurant}) {

  return (
    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
      
        <div className="card p-3 rounded">
            
                <img src={restaurant.images[0].url}
                    alt={restaurant.name} 
                    className='card-img-top mx-auto'
                />

            {/* Heading and Address */}
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{restaurant.name}</h5>
                <p className="rest_address">
                    {restaurant.address}
                </p>

                {/* rating and reviews */}
                
                {/* rating and reviews */}
                <div className="ratings mt-auto">
                    <div className="rating-outer">
                        <div className="rating-inner" style={{width:`${(restaurant.ratings / 5) * 100}%`}}></div>
                    </div>
                    <span id="no_of_reviews">{restaurant.numOfReviews} reviews</span>
                </div>
                

                
            </div>
        </div>

    </div>
  )
}
