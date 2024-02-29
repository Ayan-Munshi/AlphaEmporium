import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'

function App() {
  

  return (
    <>
    <Router>
      <Routes>
       <Route path='/' element={
        <>
       <Header/>
       <Home/>
       </>}>
        
       </Route>
        <Route path='/is' element={<h1 className='text-white'>AlphaEmporium.</h1> } ></Route>

       
      </Routes>
    </Router>
      
      
    </>
  )
}

export default App
