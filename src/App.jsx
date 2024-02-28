import './App.css'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  

  return (
    <>
    <Router>
      <Routes>
       <Route path='/home' element={<h1>home compo</h1>}></Route>
        <Route path='/is' element={<h1>AlphaEmporium.</h1> } ></Route>

       
      </Routes>
    </Router>
      
      
    </>
  )
}

export default App
