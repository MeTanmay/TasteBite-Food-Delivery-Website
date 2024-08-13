import React from 'react'
// import { useAlert } from 'react-alert';
import { LiaRupeeSignSolid } from "react-icons/lia";

export default function FoodItem() {

    // const alert = useAlert();

  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">

        <div className="card p-3 rounded">

            <img src="https://media.istockphoto.com/id/525774817/photo/mix-chaat-items-bhelpuri-paanipuri-sevpuri.jpg?s=1024x1024&w=is&k=20&c=fnZZp4zM29rWW_zG5ZqB0qgubyMdupKw9F5R7pYrjFI="
                alt="fooditem"
                className="card-img-top mx-auto" 
            />

            {/* Heading and Description */}
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">
                    Veg Loaded Pizza
                </h5>
                <p className="fooditem_des">
                     Paneer Peperroni
                </p>
                <p className="card-text">
                    <LiaRupeeSignSolid/>
                    160
                    <br />
                </p>
                <button type='button' id='cart_btn'
                    className="btn btn-primary d-inline ml-4">
                    Add to Cart
                </button>
                <br />
                <p>
                    Status : {" "}
                    <span id='stock_status'
                        className={10 > 5 ? "greenColor" : "redColor"}
                    >
                        {
                            10 > 5 ?("In Stock") : ("Out of Stock")
                        }
                    </span> 
                </p>
            </div>
        </div>

    </div>
  )
}
