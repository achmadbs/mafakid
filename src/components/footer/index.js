import React from 'react';
import './footer.css';
import { MdEmail, MdLocalPhone } from 'react-icons/md';

const Footer = () => {
  return (
    <>
      <footer className="footer__container">
        <div className="footer__sosmed">
          <a
            target="_blank"
            href="https://www.facebook.com/mafa"
            rel="noopener noreferrer">
            <img
              alt="facebook"
              src={require('../../assets/facebook-logo.svg').default}
            />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/mafa/"
            rel="noopener noreferrer">
            <img
              alt="instagram"
              src={require('../../assets/instagram-logo.svg').default}
            />
          </a>
          <a
            target="_blank"
            href="https://www.tiktok.com/mafa"
            rel="noopener noreferrer">
            <img
              alt="tiktok"
              src={require('../../assets/tiktok-logo.svg').default}
            />
          </a>
          <a
            target="_blank"
            href="https://twitter.com/mafa"
            rel="noopener noreferrer">
            <img
              alt="twitter"
              src={require('../../assets/twitter-logo.svg').default}
            />
          </a>
        </div>
        <div className="footer__actions">
          <div className="footer__actions">
            <MdEmail style={{ color: 'gray', fontSize: 16 }} />
            <p>info@mafaid.com</p>
          </div>
          <div className="footer__actions">
            <MdLocalPhone style={{ color: 'gray', fontSize: 16 }} />
            <p>info@mafaid.com</p>
          </div>
        </div>
      </footer>
      <div className="footer__legend">Powered by Mocaas.tv</div>
    </>
  );
};

export default Footer;
