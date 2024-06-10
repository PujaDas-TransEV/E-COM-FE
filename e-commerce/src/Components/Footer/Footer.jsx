import React from 'react';
// Instead of this:
// import Footer from './Components/Footer/Footer';

// You might need something like this:
// Instead of this:
// import Footer from './Components/Footer/Footer';


import './Footer.css';



import footer_logo from '../Assests/Ecommerce_Frontend_Assets/Assets/logo_big.png';
import instagram_icon from '../Assests/Ecommerce_Frontend_Assets/Assets/instagram_icon.png';
import pintester_icon from '../Assests/Ecommerce_Frontend_Assets/Assets/pintester_icon.png';
import whatsapp_icon from '../Assests/Ecommerce_Frontend_Assets/Assets/whatsapp_icon.png';
const Footer = () => {
    return(
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt=""/>
                <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li>
                    Company

                    </li>
               <li>
Products
               </li>
               <li>
Offices
               </li>
               <li>
About
               </li>
               <li>
                Contact
               </li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                   <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                   <img src={pintester_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                   <img src={whatsapp_icon} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr/>
                <p>Copyright @ 2024 - All Right Reserved.</p>
            </div>


        </div>
    )
}
export default Footer

