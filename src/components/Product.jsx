import React, { useContext } from "react";
import { Context } from "../Context-reducer";


function Product({ id, pname, image, price, rating }) {
  const {dispatch} = useContext(Context)

  const addtocartbutton = () =>{     
   dispatch(              // sending all the data to the reducer func at context-reducer to perform further tasks
    {type:"add to cart",
     items_info:{         // sending item's information because this will be usefull further and also will be useful in the add to cart feature 
      id : id,
      pname : pname,
      price : price,
      rating : rating,
      image : image
     }  
  }
   )
  }
  return (
    <div
      id="main frame"
      className="   m-[20px] justify-even max-h-[500px] max-1-[800px] shadow-lg shadow-yellow-300 rounded-2xl"
    >
      <div
        id="inner frame for glass finish"
        className=" h-[300px] w-[200px]  rounded-2xl border-[1px] border-yellow-200  backdrop-filter backdrop-blur-sm" // glass effect
      >
        <div id="product-info" className="w-full text-yellow-400 mt-10 ">
          <center>
            <img
              src={image}
              alt=""
              className="bg-white h-[100px] w-[100px]   shadow-lg shadow-yellow-300 rounded-xl hover:w-[300px] hover:h-[300px] "
            />
            <br></br>
            <h1 className="">{pname}</h1>
            <h1 className="">₹ {price}</h1>
            <button 
            onClick={addtocartbutton} //the cartbutton function will get all the info of the clicked product without any instance  because we clicked the perticular product's button
            className="bg-gray-800 border-[1px] border-yellow-600 p-1 rounded-lg hover:bg-green-400 hover:text-black hover:shadow-md hover:shadow-green-200">
              add to cart
            </button>
          </center>
          <h1 className="flex m-4 ">
            {Array(rating)
              .fill()
              .map((_) => (
                <p>⭐️</p>
              ))}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Product;
