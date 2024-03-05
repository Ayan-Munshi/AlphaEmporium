import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { Contextprovider } from "./Context-reducer";
import Nav_bar from "./components/Nav_bar";
import Checkout from "./components/Checkout"

function App() {
  return (
    <Contextprovider>
      <Router>
        <Routes>
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
    </Contextprovider>
  );
}

export default App;
