import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { Context } from "./Context-reducer";
import Nav_bar from "./components/Nav_bar";
import Checkout from "./components/Checkout"
import Login from "./components/Login";
import { useContext, useEffect } from "react";
import { auth } from "./firebase";


function App() {
  const { dispatch,container } = useContext(Context);
  const {user} = container
  
  useEffect(()=>{
    const unsubcribe = auth.onAuthStateChanged((authuser) => {     // this is the listener/gatekeeper, this will remember who alrady have an account who have not
                                                                    //( if a user is brans new then first create an account), this will remember the user by saving the email and all details
       if(authuser){
        // logged in
        dispatch({
          type: "set user",
          user : authuser       // telling the reducer that user will be the new email,etc got from onAuthStateChanage()
        })
       }else{
        // logged out
        dispatch({
          type: "set user",
          user: null
        })
       }
    })

    return () => {
      unsubcribe()
    }
  },[])



  return (
    <>
      { 
        <Router>
        <Routes>
          <Route 
          path="/login"
          element = {<Login/>}
          />

          <Route
            path="/checkout"
            element={
              <>
                <Nav_bar />
                <Checkout />
              </>
            }
          />

          <Route
            path="/"
            element={
              <>
                <Nav_bar />
                <Home />
              </>
            }
          />
          <Route
            path="/is"
            element={<h1 className="text-white">AlphaEmporium.</h1>}
          />

          <Route 
          path = "/login"
          element = {<Login/>}
          />
        </Routes>
      </Router>
      }
      {console.log(user)}
    </>
  );
}

export default App;
