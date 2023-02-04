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

export const userContext = createContext();

const Routing = () =>{
  const navigate = useNavigate();
  const {state,dispatch} = useContext(userContext);
  useEffect (()=>{
      const user = JSON.parse(localStorage.getItem("user"));
      if(user){
        dispatch({type:"USER",payload:user});
      }else{
        navigate('/login');
      }
  },[])
  return(
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile/:userid" element={<UserProfile />} />
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
