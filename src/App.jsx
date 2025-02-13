import { useState } from 'react'



import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Blog from './components/Blog'
import Shop from './components/Shop'
import Vendors from './components/Vendors'
import Contact from './components/Contact'

import Singlecard from './components/Singlecard'
import HomeProduct from './components/HomeProduct'
import  Contactform from './components/Contactform'

import DashboardLayout from './Dashboard/DashboardLayout'

import DashboardView from './Dashboard/DashboardView'

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
          <Route path='HomeProduct'  element={<HomeProduct/>}/>
          <Route path='Contactform'  element={<Contactform/>}/>
       
          <Route path= 'singleitem/:id' element={<Singlecard/>}/>
          {/* <Route path='UsestateHook'  element={<UsestateHook/>}/> */}
          

          
        </Route>
        <Route path='/' element={<DashboardLayout/>}>
        <Route path='/dashboard' index element={<DashboardView/>}/>
        
        </Route>
      
    </Routes>
    </BrowserRouter>
  
  )
}

export default App;
