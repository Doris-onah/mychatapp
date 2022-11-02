import React from "react"
import {useState} from "react"
import {HiOutlineUser ,HiOutlineBellSlash,HiOutlineCog8Tooth } from "react-icons/hi2";
import { GrBookmark } from "react-icons/gr";
function StatusQ() {
  const [toggle, setToggle] = useState(true)
 const handleClick = () => {
   setToggle(prev => !prev)
 }
  return(
    <div className="status">
      <div className="status-box">
        <div>
        <div className="pic">
<div className="status-pic"> <img className="profile-picture" src="https://picsum.photos/200/300?random=39" /></div><span><h3>Onah Doris</h3><p>Active</p></span>
</div>
<br/>
<div className="input">
  <input type="text" placeHolder="What's your status?" ></input>
  </div>
  <br/>
  <div className="status-info">  <h4>Pause notification <button className="toggle-btn" onClick={handleClick}>
   {toggle? "yes" : "no"}
    </button>  </h4></div>
    <h4>invitations to connect </h4>
   <div className="status-info"><GrBookmark/>  <h4>saved items </h4></div>
   <div className="status-info"> <HiOutlineUser/> <h4>View profile </h4></div>
   <div className="status-info"> <HiOutlineBellSlash/> <h4> notifications</h4></div>
   <div className="status-info"> <HiOutlineCog8Tooth/> <h4>preferences </h4></div>
</div>
  
    </div>
     </div> 
  )
}
export default StatusQ;