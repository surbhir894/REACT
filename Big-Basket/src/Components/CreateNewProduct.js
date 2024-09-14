import React from 'react'

function CreateNewProduct() {
  return (
    <div>


    <div className="container">
      <div className="text-center my-5">
        <h1>Create New Product</h1>
        <hr className="w-25 m-auto"/>
        <p>This is the  product page of  <span className='dis text-warning fw-bold'>CREATE NEW PRODUCTS</span> </p>
      </div>
      </div>


    <div className='container'>
    <form className='product-form'>
      <div className='product-heading'>
        <h2>Selected Products</h2>
      </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputEmail4">ProductName: </label>
      <input type="email" className="form-control" id="inputEmail4" placeholder="ProductName:"/>
    </div>
    <div className="form-group col-md-6">
      <label for="inputPassword4">Price:</label>
      <input type="password" className="form-control" id="inputPassword4" placeholder="Price"/>
    </div>
  </div>
  <div className="form-group">
    <label for="inputAddress">Available Qty:</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="Available Qty"/>
  </div>
  <div className="form-group">
    <label for="inputAddress2">General Info:</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="General Info"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Create</button>
</form>
    </div>

    </div>
  )
}

export default CreateNewProduct;


