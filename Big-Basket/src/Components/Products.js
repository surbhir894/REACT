import React from 'react'

function Products() {
  return (
    <div>
 

      <section className="team my-5 text-center">
    <div className="container">
      <div className="text-center my-5">
        <h1>Product Page</h1>
        <hr className="w-25 m-auto"/>
        <p>This is the product page of  <span className='dis text-warning fw-bold'>DISCOUNTED PRODUCTS</span> </p>
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-3 col-lg-3 col-12">
          <div className="card">
            <div className="card-body">
            <img src="./assets/big-basket2.jpg" className="img-fluid rounded-circle border border-primary p-2"/ >
              <h5 className="card-title mt-4">Vegetable</h5>
              <p className="card-text">Discount Offer</p>
              <a href="#" className="btn btn-primary">BUY NOW</a>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-12">
        <div className="card">
            <div className="card-body">
            <img src="./assets/big-basket3.jpg" className="img-fluid rounded-circle border border-primary p-2"/ >
              <h5 className="card-title mt-4">Vegetable</h5>
              <p className="card-text">Discount Offer</p>
              <a href="#" className="btn btn-primary">BUY NOW</a>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-12">
        <div className="card">
            <div className="card-body">
            <img src="./assets/big-basket4.jpg" className="img-fluid rounded-circle border border-primary p-2"/ >
              <h5 className="card-title mt-4">Vegetable</h5>
              <p className="card-text">Discount Offer</p>
              <a href="#" className="btn btn-primary">BUY NOW</a>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-12">
        <div className="card">
            <div className="card-body">
            <img src="./assets/big-basket2.jpg" className="img-fluid rounded-circle border border-primary p-2"/ >
              <h5 className="card-title mt-4">Vegetable</h5>
              <p className="card-text">Discount Offer</p>
              <a href="#" className="btn btn-primary">BUY NOW</a>
            </div>
          </div>
        </div>
      </div>
    </div>

     </section>
       
     
    </div>
  )
}

export default Products