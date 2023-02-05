import {React,useState,useContext} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import M from 'materialize-css'
import {userContext} from '../../../App'
import '../../../index.css';
import './login.css';
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
    const {state,dispatch} = useContext(userContext);
    const history = useNavigate();
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const PostData =() =>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
            return
        }
        fetch("/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
           if(data.error){
              M.toast({html: data.error,classes:"#c62828 red darken-3"})
           }
           else{
                localStorage.setItem('jwt',data.token);
                localStorage.setItem('user',JSON.stringify(data.user));
                dispatch({type:"USER",payload:data.user})
                M.toast({html:"Login Successful!",classes:"#43a047 green darken-1"})
                history('/')
           }
        }).catch(err=>{
            console.log(err)
        })
    }
    function onChange(value) {
        console.log("Captcha value:", value);
      }
  return (
        <div className="container">
            <div className='left'>
            <div className="card auth-card input-field">
                    <h2 className="header">LOGIN</h2>
                    <input
                        type="text"
                        placeholder="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                    <input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                        <ReCAPTCHA sitekey="6Lehg1QkAAAAABOZWpnDsigld3yE8gAX38tTctXb"
                            onChange={onChange}
                        />
                    <button className="btn " onClick={()=>PostData()}>
                        Login
                    </button>
                    
                    <div className='link-next'>
                        <Link to="/signup">Dont have an account ?</Link>
                    </div>
                        
                   
                </div>
            </div>
            <div className='right'>
                <div className='details'>
                        Surge SE Internship<br/>
                        March 2023<br/>
                        Sanketh Gunasekara 
                </div>
                      
            </div>
                
                
        </div>  
           
  )
}

export default Login