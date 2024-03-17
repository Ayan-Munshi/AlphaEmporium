import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { Context, Contextprovider } from "./Context-reducer";
import Nav_bar from "./components/Nav_bar";
import Checkout from "./components/Checkout"
import Login from "./components/Login";
import { useContext } from "react";


function App() {
  const { container } = useContext(Context);
  const { user } = container;
  return (
    <>
      {!user ? (<Login/>):(
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
        </Routes>
      </Router>
      )}
    </>
  );
}

export default App;
