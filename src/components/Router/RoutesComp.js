import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Products from '../Products/Products'
import Product from '../Products/Product'

function RoutesComp() {
  return (
    <div>
        <Routes>
            <Route path="/products" element={<Products />} />
            {/* Dynamic Routing */}
            <Route path="/products/:id" element={<Product />} />
        </Routes>
    </div>
  )
}

export default RoutesComp