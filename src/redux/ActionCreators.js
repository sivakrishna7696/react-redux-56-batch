// Actions Creators are functions which will returns a plain object
import { ActionTypes } from "./ActionTypes"

 export const addToCart = (product)=>{
    return{
        type : ActionTypes.ADD_TO_CART,
        payload : product
    }
}

export const fetchproducts = ()=>{

    return async(dispatch)=>{
        const response  = await fetch('https://fakestoreapi.com/products')
    const data = await response.json();
    dispatch({
        type : ActionTypes.FETCH_PRODUCTS,
        payload: data
    })
    }


    // const response  = await fetch('https://fakestoreapi.com/products')
    // const data = await response.json();
    // return{
    //     type : ActionTypes.FETCH_PRODUCTS,
    //     payload: data
    // }

}

