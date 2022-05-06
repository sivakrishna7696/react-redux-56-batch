import { ActionTypes } from "../ActionTypes"

const initialState = {
    products:[],
    cartData:[]
}

export const ProductReducer = (state = initialState,action)=>{
    switch(action.type){
        case ActionTypes.ADD_TO_CART:
            // console.log(action)
            return {...state,cartData:[...state.cartData,action.payload]}

        case ActionTypes.FETCH_PRODUCTS:
            return{...state,products:action.payload}

        default :
        return state;
    }
}