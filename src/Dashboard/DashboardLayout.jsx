import React from "react";
import {Outlet} from 'react-router-dom'
import Sidebar from "./Sidebar";
import DashboardNavbar from "./DashboardNavbar";
import dashboard_footer from "./dashboard_footer";
const DashboardLayout =()=>{
 return(
    <>
    <Sidebar/>
   <DashboardNavbar/>
   <Outlet/>
   <dashboard_footer/>
   
    </>
 )
}
export default DashboardLayout;