import React from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {


  const navigate = useNavigate();
 const handleClick = () => {
    navigate('/home/Users');
   
};



  return (
    <div className="login">
      <div className="login-box">
        <h1>User Login</h1>
        UserName:<br/>
        <input className="user-info" type="text" placeHolder="*******" ></input> <br />
        
        Password: <br/>
         <input className="user-info" type="text"  placeHolder="********"></input> <br />
         <br/>

<br/>
        <button className=" submit" onClick={handleClick}>login</button>
      </div>
    </div>
  );
}
export default Login;
