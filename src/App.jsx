import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/Header'

function App() {
  

  return (
    <>
    <Router>
      <Routes>
       <Route path='/' element={<h1 className='text-blue-500'><Header></Header></h1>}></Route>
        <Route path='/is' element={<h1>AlphaEmporium.</h1> } ></Route>

       
      </Routes>
    </Router>
      
      
    </>
  )
}

export default App
