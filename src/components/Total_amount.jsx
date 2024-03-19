import React, { useContext } from 'react'
import CurrencyFormat from "react-currency-format";
import { Context } from '../Context-reducer'; 
//import { total_amount_function } from '../Context-reducer';  //this is for testing purpose(visit Context-reducer)


function Total_amount() {
    const { container } = useContext(Context);
    const { cart } = container   // de-structuring

    const total_amount_function = (cart) => {
      return cart?.reduce((p, item) => item.price + p, 0);  // calculation of total price in checkput box
    };
  

  return (
    <div className='text-white flex flex-col'>
      <CurrencyFormat  // this component is pre-define and downloaded
      renderText={(value) => (   // this function is from predefine CurrencyFormat component
        <>
        <p>
           total amount of ({cart.length} items): <h1 className='font-bold'>{value}</h1> {/* the sum amount*/}
        </p>
        <br/>
        <small>
            <input type="checkbox"/> this order contains a gift
        </small>
        </>
      )}
      decimalScale={2}
      value={total_amount_function(cart)}
      displayType={'text'}
      thousandSeparator={true}
      prefix={'₹'}
      />
      <button  className='border-[1px] border-white mt-7 rounded-2xl p-1 shadow-md shadow-blue-400  hover:bg-green-400'>checkout</button>
    </div>
  )
}

export default Total_amount
