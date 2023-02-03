import React,{useState} from 'react'

const CreatePost = () => {
    const [title,setTitle] = useState("");
    const [body,setBody] = useState("");
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
            // value={title}
            // onChange={(e)=>setTitle(e.target.value)}
            />
           <input
            type="text"
             placeholder="Add Caption"
            // value={body}
            // onChange={(e)=>setBody(e.target.value)}
             />
           <div className="file-field input-field">
            <div className="btn #616161 grey darken-2">
                <span>Uplaod Image</span>
                <input type="file" 
                //onChange={(e)=>setImage(e.target.files[0])} 
                />
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
            </div>
            </div>
            <button className="btn waves-effect waves-light #616161 grey darken-2"
            //onClick={()=>postDetails()}
            >
                Post
            </button>
            </div>
  )
}

export default CreatePost