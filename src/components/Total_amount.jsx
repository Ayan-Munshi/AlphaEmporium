import React, { useContext } from 'react'
import CurrencyFormat from "react-currency-format";
import { Context } from '../Context-reducer';

function Total_amount() {
    const { container } = useContext(Context);
    const { cart } = container
  return (
    <div className='text-white flex flex-col'>
      <CurrencyFormat
      renderText={(value) => (
        <>
        <p>
            subtotal({cart.length}items):<strong>{`${value}`}</strong>
        </p>
        <small>
            <input type="checkbox"/> this order contains a gift
        </small>
        </>
      )}
      decimalScale={2}
      value={1}
      displayType={'text'}
      thousandSeparator={true}
      prefix={'₹'}
      />
      <button  className='border-[1px] border-white '>checkout</button>
    </div>
  )
}

export default Total_amount
