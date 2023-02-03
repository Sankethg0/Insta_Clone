import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const Home = () => {
  return (
    <div className='home'>
        <div className='card home-card'>
            <h5> Sanketh Gunasekara</h5>
            <div className='card-image'>
                <img src='https://images.unsplash.com/photo-1607368724467-0c90521abd6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80' alt='homeImage'/>
            </div>
            <div className='card-content'>
            <FavoriteBorderIcon/>
            <h6>Title</h6>
            <p> The Ocean</p>
            <input type="text" placeholder="Comment"/>
            </div>
            
        </div>
        <div className='card home-card'>
            <h5> Sanketh Gunasekara</h5>
            <div className='card-image'>
                <img src='https://images.unsplash.com/photo-1607368724467-0c90521abd6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80' alt='homeImage'/>
            </div>
            <div className='card-content'>
            <FavoriteBorderIcon />
            <h6>Title</h6>
            <p> The Ocean</p>
            <input type="text" placeholder="Comment"/>
            </div>
            
        </div>
        <div className='card home-card'>
            <h5> Sanketh Gunasekara</h5>
            <div className='card-image'>
                <img src='https://images.unsplash.com/photo-1607368724467-0c90521abd6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80' alt='homeImage'/>
            </div>
            <div className='card-content'>
            <FavoriteBorderIcon/>
            <h6>Title</h6>
            <p> The Ocean</p>
            <input type="text" placeholder="Comment"/>
            </div>
            
        </div>
    </div>
  )
}

export default Home;