import React, { useContext } from "react";
import { Context } from "../Context-reducer";
import Checkout_item_list from "./Checkout_item_list";
import Total_amount from "./Total_amount";


function Checkout() {
  const { container } = useContext(Context);
  const { cart } = container;
  return (
    <div id="checkout page parent body" className="text-white flex ">
      {/* {(() => { if(cart.length === 0){
            return <h1 className='text-white'>Your Cart is empty.</h1>
          }})()} */}
      {/*if we want to use if-else directly in here above code will be the format or else we can use conditional operator*/}


      {cart.length === 0 ? <h1> Your Cart is empty </h1>
       : 
      <div>
        
        <h1 className="m-5 text-3xl text-[80px] font-mono  ">
          Your cart list
        </h1>
        <div id="checkout page children body" className="flex flex-wrap h-[300px] w-[900px] ">  {/*for responsiveness*/}
        {cart.map((data) => {
           return (<Checkout_item_list 
            id = {data.id}
            pname = {data.pname}
            price = {data.price}
            rating = {data.rating}
            image = {data.image}
            />)
          })}
        </div>

        
        
      </div>}
      <div id="total amount section" className="  w-[300px] h-[300px] fixed right-2 z-[100]  rounded-2xl shadow-xl shadow-blue-400 p-7">
          <Total_amount/>
        </div>
    </div>
  );
}

export default Checkout;
