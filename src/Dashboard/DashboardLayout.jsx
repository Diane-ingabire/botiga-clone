import React from "react";
import {Outlet} from 'react-router-dom'
import Sidebar from "./Sidebar";
import DashboardNavbar from "./DashboardNavbar";
const DashboardLayout =()=>{
 return(
    <>
    <Sidebar/>
   <DashboardNavbar/>
   <Outlet/>
   
    </>
 )
}
export default DashboardLayout;