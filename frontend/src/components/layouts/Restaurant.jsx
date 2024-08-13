import React from 'react'
import { Link } from 'react-router-dom'

export default function Restaurant({restaurant}) {

  return (
    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
      
        <div className="card p-3 rounded">
            
                <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"
                    alt="abc"
                    className='card-img-top mx-auto'
                />

            {/* Heading and Address */}
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">Dominos Pizza</h5>
                <p className="rest_address">
                    
                    123., Street
                </p>

                {/* rating and reviews */}
                <div className="ratings mt-auto">
                    <div className="rating-outer">
                        <div className="rating-inner" ></div>
                    </div>
                    <span id="no_of_reviews">(140) reviews</span>
                </div>
                

                
            </div>
        </div>

    </div>
  )
}
