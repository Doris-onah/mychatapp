import React from 'react';
import { HiCamera ,HiOutlineChartBar,HiWifi} from "react-icons/hi2";
import { MdOutlineBatteryFull } from "react-icons/md";

import { Link, Outlet } from 'react-router-dom';


function Home() {
  return (
    <div className="home">
<div className="home-box">
  <div className="battery-icon"><HiWifi/><HiOutlineChartBar/><MdOutlineBatteryFull/></div>
  <div className="header">
    <div className="header-box">
    <h2>WHATSAPP</h2> 
    <div className="apps">
      <div className="apps-con">
      <p><HiCamera/></p>
    <span>  <Link to="users" className="link">Chat</Link> </span>
    <span> <Link to="Statusq" className="link">Status</Link>  </span>
   <span>   <button className="btn">
     <Link to="userprofile" className="link">Explore</Link>
    </button>
    
    </span>
    </div>
    </div>
    </div>
    
      
      </div>
      <div >  
        
       <Outlet /> 
      </div>
      </div>
    </div>
  );
}
export default Home;
