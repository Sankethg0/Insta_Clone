import React,{useState,useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import M from 'materialize-css'
import ReCAPTCHA from "react-google-recaptcha";


const SignUp = () => {
    const history = useNavigate();
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const [image,setImage] = useState("");
    const [url,setUrl] = useState(undefined);

    useEffect(()=>{
            if(url){
                uploadFields()
            }
        },)

  const uploadPic = ()=>{
      const data = new FormData()
      data.append("file",image)
      data.append("upload_preset","instagram-clone")
      data.append("cloud_name","dqewuyfxg")
      fetch("https://api.cloudinary.com/v1_1/dqewuyfxg/image/upload",{
          method:"post",
          body:data
      })
      .then(res=>res.json())
      .then(data=>{
         setUrl(data.url)
      })
      .catch(err=>{
          console.log(err)
      })
  }

  const uploadFields = ()=>{
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
            email,
            pic:url
        })
    }).then(res=>res.json())
    .then(data=>{
       if(data.error){
          M.toast({html: data.error,classes:"#c62828 red darken-3"})
       }
       else{
           M.toast({html:data.message,classes:"#43a047 green darken-1"})
           history('/login')
       }
    }).catch(err=>{
        console.log(err)
    })
}

    const PostData =() =>{
      if(image){
        uploadPic()
    }else{
        uploadFields()
    }
    }
    function onChange(value) {
        console.log("Captcha value:", value);
      }

  return (
    
    <div className='container'>
        <div className='left'>
        <div className="card auth-card input-field">
        <h2>Instagram</h2>
            <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
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
            <div className="file-field input-field">
            <div className="btn #64b5f6 blue darken-1">
                <span>Upload pic</span>
                <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
            </div>
            </div>
            <ReCAPTCHA sitekey="6Lehg1QkAAAAABOZWpnDsigld3yE8gAX38tTctXb"
                            onChange={onChange}
                        />
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
            onClick={()=>PostData()}
            >
                SignUP
            </button>
            <h5>
                <Link to="/login">Already have an account ?</Link>
            </h5>
          
      
      
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

export default SignUp;