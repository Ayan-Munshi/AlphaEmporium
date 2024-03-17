import React from "react";

function Login() {
  return (
    <div className="relative flex h-screen w-screen bg-gray-600 items-center justify-center">
      <img
        src="https://i.pinimg.com/736x/26/8f/95/268f951a25613da5efc13a4282965969.jpg"
        alt=""
        className="h-screen w-screen object-cover "
      />
      <div className="absolute m-[20px] justify-even max-h-[500px] max-1-[800px] shadow-lg shadow-blue-300 rounded-2xl ">
        <div className="h-[500px] w-[400px]  rounded-2xl border-[1px] border-blue-200  backdrop-filter backdrop-blur-lg p-12">
          <div>
          <lebel className ="text-white shadow-md"> Email : </lebel>
          <input type="text" className=" w-[300px] px-4 py-2 rounded-md border-b border-gray-300  bg-transparent placeholder-gray-500 text-white shadow-sm shadow-blue-300" placeholder="Enter email here...." />
          </div>
         
          <div className="mt-11">
          <lebel className ="text-white"> Password : </lebel>
          <input type="text" className=" w-[300px] px-4 py-2 rounded-md border-b border-gray-300  bg-transparent placeholder-gray-500 text-white mt-3 shadow-sm shadow-blue-300" placeholder="Enter password here...." />
          </div>
          <button className="w-[150px] mt-[50px]  ml-[75px] text-white bg-transparent border-[1px] border-white p-1 rounded-lg shadow-md shadow-blue-300"> Login </button>
          <button className="w-[250px] mt-[50px]  ml-[30px] text-white bg-transparent border-[1px] border-white p-1 rounded-lg shadow-md shadow-blue-300"> Sign in</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
