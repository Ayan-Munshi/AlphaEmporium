import React, { useContext } from "react";
import { Context } from "../Context-reducer";

function Checkout() {
  const { container } = useContext(Context);
  const { cart } = container;
  return (
    <div className="text-white">
      {/* {(() => { if(cart.length === 0){
            return <h1 className='text-white'>Your Cart is empty.</h1>
          }})()} */}
      {/*if we want to use if-else directly in here above code will be the format or else we can use conditional operator*/}
      {cart.length === 0 ? <h1> Your Cart is empty </h1> : <div>
        <h1>item</h1>
        </div>}
    </div>
  );
}

export default Checkout;
