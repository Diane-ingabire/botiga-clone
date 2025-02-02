import { useState } from 'react'

import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Blog from './components/Blog'
import Shop from './components/Shop'
import Vendors from './components/Vendors'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/'  element={<Home/>}/>
          <Route path='Blog'  element={<Blog/>}/>
          <Route path='Shop'  element={<Shop/>}/>
          <Route path='Vendors'  element={<Vendors/>}/>

          
        </Route>
      
    </Routes>
    </BrowserRouter>
  
  )
}

export default App;
