import React, { useContext } from 'react'
import { Context } from '../Context-reducer'

function Checkout_item_list({id,pname,price,rating,image}) {

  const {dispatch} = useContext(Context)


  const removefromcartbutton = () => {
     dispatch(
      {
        type :"remove from cart",      // sending this data to the reducer function to match the condition and for the further work
        id:id
      }
     )
  }

  return (
    <div id='item list in checkout page' className='h-[300px] w-[full] flex  m-4 p-9 rounded-2xl  '>
        <img src={image} alt="" className='h-[250px] w-[450px] shadow-lg shadow-blue-500 rounded-xl' />
        <div id='item details of product in checkout' className='m-9 h-[200px] w-[400px]'>
            <h1 className='text-[50px]'>{pname}</h1>
            <h1 className='text-green-400'>₹ {price}</h1>
            <h1 className="flex ml-1 mt-2">
            {Array(rating)
              .fill()
              .map((_) => (
                <p>⭐️</p>
              ))}
          </h1>
          <button onClick={removefromcartbutton} 
          className='border-[1px] border-white rounded-xl p-2 hover:bg-green-400 hover:text-black shadow-lg shadow-blue-400 mt-2'>
            Remove from cart</button>
        </div>
    </div>
    
  )
}

export default Checkout_item_list
