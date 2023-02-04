import React,{useState,useEffect} from 'react'
import M from 'materialize-css'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
    const history = useNavigate();
    const [title,setTitle] = useState("");
    const [body,setBody] = useState("");
    const [image,setImage] = useState("");
    const [url,setUrl] = useState(""); 

    useEffect(()=>{
        if(url){
        fetch("/createpost",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                title,
                body,
                pic:url
            })
        }).then(res=>res.json())
        .then(data=>{
            
           if(data.error){
              M.toast({html: data.error,classes:"#c62828 red darken-3"})
           }
           else{
               M.toast({html:"Post Created Successfully!",classes:"#43a047 green darken-1"})
               history('/')
           }
        }).catch(err=>{
            console.log(err)
        })
    }
    },[url]);

    const postDetails = ()=>{
        const data = new FormData()
        data.append("file",image)
        data.append("upload_preset","instagram-clone")
        data.append("cloud_name","dixrhvrqx")
        fetch("https://api.cloudinary.com/v1_1/dixrhvrqx/image/upload",{
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
           setUrl(data.url);
        })
        .catch(err=>{
            console.log(err)
        })  

        
    }
  
  return (
    <div className="card input-filed"
       style={{
           margin:"30px auto",
           maxWidth:"500px",
           padding:"20px",
           textAlign:"center"
       }}
       >
           <input 
           type="text"
            placeholder="Title for the post"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            />
           <input
            type="text"
             placeholder="Add Caption"
            value={body}
            onChange={(e)=>setBody(e.target.value)}
             />
           <div className="file-field input-field">
            <div className="btn #616161 grey darken-2">
                <span>Uplaod Image</span>
                <input type="file" 
                onChange={(e)=>setImage(e.target.files[0])} 
                />
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
            </div>
            </div>
            <button className="btn waves-effect waves-light #616161 grey darken-2"
            onClick={()=>postDetails()}
            >
                Post
            </button>
            </div>
  )
}

export default CreatePost