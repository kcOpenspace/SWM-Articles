import React from 'react';
import './Footer.scss';
import FooterLogo from '../../../assets/media/footerlogo2x.png';

const Footer = () => {
  return (
    <footer>
      <div className='row'>
        <ul className='footer-nav'>
          <li><a href="#">Sitemap</a></li>
          <li><a href="#">Privacy Policies</a></li>
          <li><a href="#">Terms & Conditions</a></li>
        </ul>
        <img className='footer-logo' src={FooterLogo} alt="footer logo"/>
      </div>
    </footer>
  )
}

export default Footer