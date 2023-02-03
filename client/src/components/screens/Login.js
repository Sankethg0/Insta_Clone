import {React,useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import M from 'materialize-css'

const Login = () => {
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
               M.toast({html:"Login Successful!",classes:"#43a047 green darken-1"})
               history('/')
           }
        }).catch(err=>{
            console.log(err)
        })
    }
  return (
    <div className="mycard">
    <div className="card auth-card input-field">
      <h2 className="brand-logo">Instagram</h2>
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
      <button className="btn waves-effect waves-light #616161 grey darken-2"
      onClick={()=>PostData()}
      >
          Login
      </button>
      <h5>
          <Link to="/signup">Dont have an account ?</Link>
      </h5>
      <h6>
          <Link to="/reset">Forgot password ?</Link>
      </h6>
  </div>
</div>
  )
}

export default Login