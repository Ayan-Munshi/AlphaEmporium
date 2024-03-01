import React from "react";

function Product({ id, pname, image, price, rating }) {
  return (
  
    <div id="main frame" className="   m-[20px] justify-even max-h-[500px] max-1-[800px] shadow-lg shadow-yellow-300">
  <div
    id="inner frame for glass finish"
    className=" h-[300px] w-[200px]  rounded-lg border-[1px] border-yellow-200  backdrop-filter backdrop-blur-lg" // glass effect
  >
    <div id="product-info" className="w-full text-yellow-400 mt-10">
      <center>
        <img
          src={image}
          alt=""
          className="bg-white h-[100px] w-[100px] relative  shadow-lg shadow-yellow-300 rounded-xl "
        />
        <br></br>
          <h1 className="">{pname}</h1>
          <h1 className="">{price}</h1>
          <h1 className="">{rating}</h1>
          <button className="bg-gray-500">add to cart</button>
        
      </center>
    </div>
  </div>
</div>

  );
}

export default Product;
