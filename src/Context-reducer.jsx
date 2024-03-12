import { createContext,useReducer } from 'react'

const Context = createContext()

// export const initialstate = {           // this initial state is for testing only to see that the data is transfered to another component or not
//     cart:['hdjgvj','hhbfhsdv','svbkzbkv']
// }

export const initialstate = {
    cart : [],
    user : null
}

//  exporting this func to import in Total_amount component to use.  ( for testing purposes )

// export const total_amount_function = (cart) => {
//     return cart?.reduce((p, item) => item.price + p, 0);  // calculation of total price in checkput box
//   };

const reducer = (state,action) => {
    console.log(action)
    if(action.type === "add to cart"){
       return{
        ...state,
        cart : [...state.cart, action.items_info]  // in the empty cart we are storing previous cart state and the new present items_info which came after clicking the Add to cart button
       } 
    }
    else if(action.type === "remove from cart"){
     
        let newcart = [...state.cart]
        const index_num = state.cart.findIndex((cartitem) => cartitem.id === action.id ) // means find the index number of the element from state.cart array if/when [ any cart item's  id === action.id(came from remove from cart button)]
        
        if(index_num >= 0){
          newcart.splice(index_num , 1)  // means delete 1 element and the start point will be the index number(index_num)

        }else{
            alert(`${action.id} this  product can't be deleted`)
        }
        return {
            ...state,         // after all this return the all previous state but now the cart's value will newcart's value 
            cart: newcart
        }
    }
    return state    // at the end return state
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
