import React, { useState } from 'react'
import Counter from './Counter';
import InputField from './InputField';

function Header() {

  return (<>
    <header>
      <nav className="navbar navbar-expand-lg  px-4 border-bottom">
        {/* <!-- px-3 padding  --> */}
        <div className="container-fluid">
          <a className="navbar-brand text-white fs-4" href="#"><i className="bi bi-cart"></i> Big Basket</a>
          {/* <!-- fs-1 fontsize  --> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span classNameName="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5 text-center">
              {/* <!-- ms-margin right ml-margin left  me-margin left --> */}
              <li className="nav-item"></li>
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Products  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Product Details</a></li>
                    <li><a class="dropdown-item" href="#"> Create New Product</a></li>

                  </ul>
              

              </li>


            </ul>
          </div>

          <button className='admin'>Admin</button>
        </div>
      </nav >
    </header >

  </>)

}

export default Header