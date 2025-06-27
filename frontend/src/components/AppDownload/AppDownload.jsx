import React from 'react'
import './AppDownload.css';
import { assets } from '../../assets/frontend_assets/assets';

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br />Tomato App</p>
        <div className="app-download-platforms">
            <a href="https://play.google.com/store/apps/details?id=com.application.zomato&hl=en-US&pli=1" target="_blank" rel="noopener noreferrer">
              <img src={assets.play_store} alt="Play Store" />
            </a>
            <a href="https://apps.apple.com/in/app/zomato-food-delivery-dining/id434613896" target="_blank" rel="noopener noreferrer">
              <img src={assets.app_store} alt="App Store" />
            </a>
        </div>
    </div>
  )
}

export default AppDownload;
