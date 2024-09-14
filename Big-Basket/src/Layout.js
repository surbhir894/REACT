import React from 'react'
import Header from './Components/Header'
import Products from './Components/Products'
import ProductDetails from './Components/ProductDetails'
import CreateNewProduct from './Components/CreateNewProduct'
import Banner from './Components/Banner'
import ProductContent from './Components/ProductContent'
import Footer from './Components/Footer'

function Layout() {
  return (
    <>
    <Header/>
    <Banner/>
    <Products/>
    <ProductDetails/>
    <CreateNewProduct/>
    <ProductContent/>
    <Footer/>

    
    </>
  )
}

export default Layout