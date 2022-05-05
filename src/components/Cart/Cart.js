import React from 'react'
import {useSelector}  from 'react-redux'
 
function Cart() {
    const state = useSelector((state)=>state.productsData.cartData)
    console.log(state)
  return (
    <div>Cart</div>
  )
}

export default Cart