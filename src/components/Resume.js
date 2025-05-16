import React from 'react';

const Resume = () => {
  return (
    <section id="resume" style={{ padding: '50px', background: '#eaeaea', textAlign: 'center' }}>
      <h2>Resume</h2>
      <p>Click below to view or download my resume.</p>
      <a 
        href="/manoj_kumar-Resume.pdf" 
        download 
        style={{
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: '#333',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '5px',
          marginTop: '10px'
        }}
      >
        Download Resume
      </a>
    </section>
  );
};

export default Resume;
