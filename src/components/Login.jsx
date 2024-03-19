// login.jsx file
import React, { useState } from "react";
import {auth}  from "../firebase"
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"  // remenber to import them


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
 
  const signin_button = (event) => {
    event.preventDefault();
    console.log('hi'); // for decoding
    signInWithEmailAndPassword(auth,email, password)  // user can sign in with email,passwword
      .then(() => {    
        navigate("/");    // if sign in is successful then navigate the user to "/" url
      })
      .catch((error) => {
        alert(error.message);
      });
  };                                           

  const new_account_button = (event) => {
    event.preventDefault();
    console.log('hello');
    createUserWithEmailAndPassword(auth,email, password) // create user account with email and password
      .then(() => {
        navigate("/");   // if creating account is successful then navigate the user to "/" url
      })
      .catch((error) => {
        alert(error.message);
      });
  };
                        // if user enters email and password then click on sign in then an alert will occur showing the alert means this email does not have an account with us already
                        // but  if user enters email and password then click on Create an account button then user will reach the home page with no error/alert (this mean at fist instead of signing in we crteated an account )
                        // now if user try to click on sign in button with the same email,password he created an account with then user will reach the home page wwithout any error/alert
                        // for this feature we need a listener/gate keeper to keep an i on who have an account already who has not (to do this we used onAuthStateChange() from firebase in App.jsx) 
  return (
    <div className="relative flex  h-screen w-screen bg-gray-600 items-center justify-center">
      <img
        src="https://i.pinimg.com/736x/26/8f/95/268f951a25613da5efc13a4282965969.jpg"
        alt=""
        className="h-screen w-screen object-cover "
      />
      <div className="absolute m-[20px] justify-even max-h-[500px] max-1-[800px] shadow-lg shadow-blue-300 rounded-2xl ">
        <form className="h-[500px] w-[400px]  rounded-2xl border-[1px] border-blue-200  backdrop-filter backdrop-blur-lg p-12">
          <div>
            <label className="text-white shadow-md">Email:</label>
            <input
              type="text"
              value={email}
              className="w-[300px] px-4 py-2 rounded-md border-b border-gray-300 bg-transparent placeholder-gray-500 text-white shadow-sm shadow-blue-300"
              placeholder="Enter email here...."
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
         
          <div className="mt-11">
            <label className="text-white">Password:</label>
            <input
              type="password"
              value={password}
              className="w-[300px] px-4 py-2 rounded-md border-b border-gray-300 bg-transparent placeholder-gray-500 text-white mt-3 shadow-sm shadow-blue-300"
              placeholder="Enter password here...."
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-[150px] mt-[50px] ml-[75px] text-white bg-transparent border-[1px] border-white p-1 rounded-lg shadow-md shadow-blue-300 hover:bg-green-400"          
            onClick={signin_button}
          >
            Sign in
          </button>


          <h1 className="text-white mt-5 ml-9"> 
          <input type="checkbox" /> Don't have an account ?
          </h1>   {/*just for look*/}

          
          <button 
            type="submit"
            className="w-[250px] mt-[10px] ml-[30px] text-white bg-transparent border-[1px] border-white p-1 rounded-lg shadow-md shadow-blue-300 hover:bg-green-400"
            onClick={new_account_button}
          >
            Create new account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
