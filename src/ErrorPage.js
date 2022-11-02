import React from "react"
import {useNavigate} from "react-router-dom"

function ErrorPage() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/home/Users")
  }
  return(
    <div className="errorpage">
      <h1>404 page</h1>
      <h1>page not found</h1>
      <button onClick={handleClick}>back home</button>
    </div>
  )
}
export default ErrorPage