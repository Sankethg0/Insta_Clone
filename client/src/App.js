import React,{useEffect,createContext,useReducer,useContext} from 'react';
import './App.css'
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route,useNavigate} from 'react-router-dom'
import Home from './components/pages/home/Home';
import Login from './components/pages/login/Login';
import Signup from './components/pages/signup/Signup';
import Profile from './components/pages/profile/Profile';
import CreatePost from './components/pages/createPost/CreatePost';
import {initialState, reducer} from './reducers/userReducer';
import UserProfile from './components/pages/userProfile/userProfile';
import SubscribedUserPosts from './components/pages/subscribeUserPosts/subscribeUserPost';
import Reset from './components/pages/reset/reset';
import NewPassword from './components/pages/newPassword/newPassword';


export const userContext = createContext();

const Routing = () =>{
  const navigate = useNavigate();
  const {dispatch} = useContext(userContext);
  useEffect (()=>{
      const user = JSON.parse(localStorage.getItem("user"));
      if(user){
        dispatch({type:"USER",payload:user});
      }else{
        navigate('/login');
      }
  },)
  return(
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/createpost" element={<CreatePost />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile/:userid" element={<UserProfile />} />
        <Route exact path="/myfollowingpost" element={<SubscribedUserPosts />} />
        <Route exact path="/reset" element={<Reset />} />
        <Route path="/reset/:token" element={<NewPassword />} />
    </Routes>
  )
}

function App() {
  const [state,dispatch] = useReducer(reducer,initialState);
  return (
    <userContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
      <Navbar />
      <Routing/>
    </BrowserRouter>
   </userContext.Provider>
   );
      
}

export default App;
