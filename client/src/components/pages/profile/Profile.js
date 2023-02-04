import React,{useEffect,useState,useContext} from 'react';
import {userContext} from "../../../App";

const Profile = () => {
    const [mypics,setPics] = useState([]);
    const {state,dispatch} = useContext(userContext);
    useEffect(()=>{
        fetch('/mypost',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            setPics(result.mypost)
        })
     },[]);
  return (
    <div style={{maxWidth:"550px", margin:"0px auto"}}>
        <div style={{
            display:"flex",
            justifyContent:"space-around",
            margin:"18px 0px",
            borderBottom:"3px solid grey"}}>
            <div>
                <img style={{width:"160px",height:"160px",borderRadius:"80px"}} 
                src="https://lh3.googleusercontent.com/a/AEdFTp5q5s7Q1ktpgcpNNfpqQybvfLNp2bQssll4OHKpfg=s288-p-rw-no"
                alt='not found'/>
            </div>
            <div>
                <h4>{state?state.name:"loading"}</h4>
                <div style={{display:'flex',justifyContent:"space-between", width:"109%"}}>
                    <h6>40 Post </h6>
                    <h6>580 Followers </h6>
                    <h6>562 Following </h6>
                </div>
            </div>
        </div>
        <div className='feed'>
            {
                mypics.map(item=>{
                    return(
                     <img key={item._id} className="item" src={item.photo} alt={item.title}/>  
                    )
                })
            }
        </div>
    </div>
  )
}

export default Profile;