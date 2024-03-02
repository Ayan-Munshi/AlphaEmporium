import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import { Contextprovider } from './Context-reducer'

function App() {
  

  return (
    <Contextprovider>
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
      
      
    </Contextprovider>
  )
}

export default App
