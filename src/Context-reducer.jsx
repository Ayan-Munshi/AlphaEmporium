
import { createContext,useReducer } from 'react'

const Context = createContext()

// export const initialstate = {           // this initial state is for testing only to see that the data is transfered to another component or not
//     cart:['hdjgvj','hhbfhsdv','svbkzbkv']
// }

export const initialstate = {
    cart : [],
    user : null
}
const reducer = (state,action) => {
    console.log(action)
    if(action.type ==="add to cart"){
       return{
        ...state,
        cart : [...state.cart, action.items_info]  // in the empty cart we are storing previous cart state and the new present items_info which came after clicking the Add to cart button
       }
       
    }
    return state
}

const Contextprovider = ({children}) => {

    const[container,dispatch] = useReducer(reducer,initialstate)

    return (
        <Context.Provider value = {{container,dispatch}}>  {/*at first i was passing the initialstate to have the access of (cart) from another component
                                                            but thats totally wrong to access (cart) coz through (container) we can access (cart from anywhere)*/}
            {children}

        </Context.Provider>
    )
}

export {Context,Contextprovider}
