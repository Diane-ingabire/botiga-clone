import { useState } from 'react'


import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Blog from './components/Blog'
import Shop from './components/Shop'
import Vendors from './components/Vendors'
import Contact from './components/Contact'

import Singlecard from './components/Singlecard'
// import UsestateHook from './components/UsestateHook'



function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/'  element={<Home/>}/>
          <Route path='Blog'  element={<Blog/>}/>
          <Route path='Shop'  element={<Shop/>}/>
          <Route path='Vendors'  element={<Vendors/>}/>
          <Route path='Contact'  element={<Contact/>}/>
       
          <Route path= 'singleitem/:id' element={<Singlecard/>}/>
          {/* <Route path='UsestateHook'  element={<UsestateHook/>}/> */}
          

          
        </Route>
      
    </Routes>
    </BrowserRouter>
  
  )
}

export default App;
