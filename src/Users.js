
import React from 'react';
import { useState, useEffect } from 'react';
function Users() {
const [users, setUsers] = useState([]);
const [page, setPage] = useState(1)
const [loading, setLoading] = useState(false)


useEffect(() => {
 setLoading(true)
  fetch(
    `https://randomuser.me/api/?page=${page}&results=30&seed=abc`
    )
  .then((response) => {
  return response.json();
  })
  .then((data) => {
    setLoading(false)
  setUsers(data);
  });
}, []);

const PER_PAGE = 4;
const pages = 5;
// const total = users?.results?.length;
const skip = page * PER_PAGE - PER_PAGE;

return (
  <div className="contact-box">
<div className="contact">
{loading ? <p className="loading">loading</p> : <div className="user-con">
  {users?.results?.slice(skip, skip + PER_PAGE).map((each) => {
    
     return (
<div className="user-box" key={users}>
  <div className="show-user">
    <div ><img src={each.picture.thumbnail}/></div>
    <div>
 <h5>{each.name.first} {each.name.last}</h5> <br/>
 {each.email}
 <hr/>
 </div>
</div>
</div>

          )
          
        })} 

<div className="paginating">
        <p className="pagination">  Pages: {page} of {pages}</p> 
       <button  disabled={page <= 1}  onClick={() => setPage((prev) => prev - 1)} >  prev </button>


     {Array.from({ length: pages }, (value, index) => index + 1).map( (each) => (
          <button onClick={() => setPage(each)}>{each}</button>
        )
      )}  


<button disabled={page >= pages} aria-disabled={page >= pages} onClick={() => setPage((page) => page + 1)} >  next </button>
</div>   
</div>} 

</div>

</div>
);
}
export default Users;
