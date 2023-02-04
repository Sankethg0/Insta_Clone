import React,{useContext} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import {userContext} from '../App'


const Navbar = () => {
  const {state,dispatch} = useContext(userContext);
  const navigate = useNavigate();
  const renderList = ()=>{
    if(state){
      return[
        <li><Link to="createpost">Create Post</Link></li>,
        <li><Link to="/profile">Profile</Link></li>,
        <li><button className="btn waves-effect waves-light #616161 grey darken-2"
        onClick={()=>{
          localStorage.clear();
          dispatch({type:"CLEAR"});
          navigate('/login');
        }}>
          Logout
        </button></li>
      ]
    }else{
      return[
        <li><Link to="/signup">Signup</Link></li>,
        <li><Link to="/signup">Signup</Link></li>
      ]
    }
  }
  return (
    <nav className='navbar'>
    <div className="nav-wrapper white">
      <Link to={state?"/":"/login"} className="brand-logo">Instagram</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        {renderList()}
      </ul>
    </div>
  </nav>
  )
}
export default Navbar;
