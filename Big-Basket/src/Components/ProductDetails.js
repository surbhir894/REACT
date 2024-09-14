import React from 'react'

function  ProductDetails(){


  return (
    <div>


      <div className="container">
      <div className="text-center my-5">
        <h1>Product Details</h1>
        <hr className="w-25 m-auto"/>
        <p>This is the detail product page of  <span className='dis text-warning fw-bold'>DISCOUNTED PRODUCTS</span> </p>
      </div>
      </div>


<section>
  <button className='create-new'>Create New</button>
      <div className='container mt-5'>

      <table className="table">
  <thead>
    <tr>
      <th scope="col">Sno</th>
      <th scope="col">Product</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Qty</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td><img src='' alt='img'/></td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Otto</td>
      <td  className='action-button' ><button>Update</button>
      <button>Delete</button></td>
    </tr>
    <tr>
    <th scope="row">1</th>
      <td><img src='' alt='img'/></td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Otto</td>
      <td className='action-button'><button>Update</button>
      <button>Delete</button></td>
    </tr>
    <tr>
    <th scope="row">1</th>
      <td><img src='' alt='img'/></td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Otto</td>
      <td className='action-button' ><button>Update</button>
      <button>Delete</button></td>
    </tr>
    <tr>
    <th scope="row">1</th>
      <td><img src='' alt='img'/></td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Otto</td>
      <td className='action-button' ><button>Update</button>
      <button>Delete</button></td>
    </tr>
    <tr>
    <th scope="row">1</th>
      <td><img src='' alt='img'/></td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Otto</td>
      <td className='action-button' ><button>Update</button>
      <button>Delete</button></td>
    </tr>
    <tr>
    <th scope="row">1</th>
      <td><img src='' alt='img'/></td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Otto</td>
      <td className='action-button' ><button>Update</button>
      <button>Delete</button></td>
    </tr>
  </tbody>
</table>

      </div>
      </section>
    </div>
  )
}

export default ProductDetails;

 
    
