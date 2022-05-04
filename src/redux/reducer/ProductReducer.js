import { ActionTypes } from "../ActionTypes"

const initialState = {
    products:[],
    cartData:[]
}

export const ProductReducer = (state = initialState,action)=>{
    switch(action.type){
        case ActionTypes.ADD_TO_CART:
            return [];

        default :
        return state;
    }
}