import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px 20px', background: '#333', color: 'white' }}>
      <a href="#home" style={{ margin: '10px', color: 'white' }}>Home</a>
      <a href="#about" style={{ margin: '10px', color: 'white' }}>About</a>
      <a href="#projects" style={{ margin: '10px', color: 'white' }}>Projects</a>
      <a href="#resume" style={{ margin: '10px', color: 'white' }}>Resume</a>
      <a href="#contact" style={{ margin: '10px', color: 'white' }}>Contact</a>
    </nav>
  );
};

export default Navbar;
