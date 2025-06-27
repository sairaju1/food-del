import React from 'react';
import './Footer.css';
import { assets } from '../../assets/frontend_assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Our food delivery website brings delicious meals from your favorite local restaurants right to your doorstep. With a user-friendly interface and diverse menu options, satisfying your cravings has never been easier!</p>
                <div className="footer-social-icons">
                    <a href="https://github.com/MAMIDITEJA32" target="_blank" rel="noopener noreferrer">
                        <img className='git' src={assets.github_icon} alt="Facebook" />
                    </a>
                    <a href="https://x.com/MamidiTeja5472" target="_blank" rel="noopener noreferrer">
                        <img src={assets.twitter_icon} alt="Twitter" />
                    </a>
                    <a href="https://www.linkedin.com/in/teja-mamidi-961786291" target="_blank" rel="noopener noreferrer">
                        <img src={assets.linkedin_icon} alt="LinkedIn" />
                    </a>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>9391233598</li>
                    <li>mamidrteja@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copy-right">Copyright 2024 &#169; MAMIDI TEJA - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
