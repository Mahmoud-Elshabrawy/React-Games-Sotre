import React from 'react';
import footer from '../Images/footer-bg.jpg';

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${footer})`,
        width: '100%',
        height: '150px',
        borderTopRightRadius: '70px',
        borderTopLeftRadius: '70px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
        bottom: '0',
      }}
    >
      <h4 style={{}}>Copyright © 2048 LUGX Gaming Company</h4>
      <h6>By Mahmoud El-Shabrawy Mohamed</h6>
    </div>
  );
};

export default Footer;
