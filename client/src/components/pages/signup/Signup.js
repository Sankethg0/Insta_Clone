import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import M from 'materialize-css'


const Signup = () => {
    const history = useNavigate();
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const PostData =() =>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
            return
        }
        fetch("/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                password,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
               M.toast({html:data.error, classes:"#c62828 red darken-3"}) 
            } else{
                M.toast({html:data.message,classes:"#43a047 green darken-1"})
                history('/login');
            }
        }).catch(err=>{
            console.log(err);
        })
    }

  return (
    
    <div className='container'>
        <div className='left'>
        <div className="card auth-card input-field">
      <h2 className="header">SIGNUP</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}/>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}/>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}/>

      <button className="btn" onClick={()=>PostData()}>
          SignUp
      </button>
      <div className='link-next'>
      <Link to="/login">Already have an account ?</Link>
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

export default Signup