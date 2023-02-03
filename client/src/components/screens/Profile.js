import React from 'react'

const Profile = () => {
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
                <h4>Sanketh Gunasekara</h4>
                <div style={{display:'flex',justifyContent:"space-between", width:"109%"}}>
                    <h6>40 Post </h6>
                    <h6>580 Followers </h6>
                    <h6>562 Following </h6>
                </div>
            </div>
        </div>
        <div className='feed'>
            <img className='item' src="https://www.simplilearn.com/ice9/free_resources_article_thumb/tester-or-developer-what-suits-you-the-most.jpg"
            alt='FeedImage' />
             <img className='item' src="https://imageio.forbes.com/blogs-images/forbestechcouncil/files/2019/01/canva-photo-editor-8-7.jpg?format=jpg&width=960"
            alt='FeedImage' />
             <img className='item' src="https://s3.eu-west-1.amazonaws.com/redsys-prod/articles/eac8c6d69d1ce8ce0ff8824d/images/teaserImage_xxxx_croppedTeaserImage.jpg"
            alt='FeedImage' />
        </div>
    </div>
  )
}

export default Profile