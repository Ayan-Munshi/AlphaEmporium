
import { createContext,useReducer } from 'react'

const Context = createContext()

// export const initialstate = {           // this initial state is for testing only to see that the data is transfered to another component or not
//     basket:['hdjgvj','hhbfhsdv','svbkzbkv']
// }

export const initialstate = {
    cart : []
}
const reducer = (state,action) => {
    console.log(action)
    if(action.type === 'add to cart'){
       return state
    }else if(action.type === 'remove from cart'){
       return state
    } 

    
    
    
}

const Contextprovider = ({children}) => {

    const[container,dispatch] = useReducer(reducer,initialstate)

    return (
        <Context.Provider value = {{container,dispatch,initialstate}}>  // also passing the initialstate this time as a data
            {children}
        </Context.Provider>
    )
}

export {Context,Contextprovider}
