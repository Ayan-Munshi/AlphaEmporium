import React, { useContext } from "react";
import { Context } from "../Context-reducer";
import Checkout_item_list from "./Checkout_item_list";

function Checkout() {
  const { container } = useContext(Context);
  const { cart } = container;
  return (
    <div className="text-white">
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
        <div id="item list" className="flex flex-wrap">  {/*for responsiveness*/}
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
    </div>
  );
}

export default Checkout;
