import React from 'react';

const Resume = () => {
  return (
    <section id="resume" style={{ padding: '50px', background: '#f9f9f9', textAlign: 'center' }}>
      <h2>Manoj-kumar-Resume</h2>

      {/* Resume Viewer */}
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
        <iframe
          src="/Manoj_kumar-Resume.pdf"
          title="Resume"
          width="80%"
          height="600px"
          style={{ border: '1px solid #ccc', borderRadius: '8px' }}
        ></iframe>
      </div>

      {/* Download Link */}
      <a
        href="/Manoj_kumar-Resume.pdf"
        download
        style={{
          display: 'inline-block',
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          borderRadius: '5px',
          textDecoration: 'none',
        }}
      >
        Download Resume
      </a>
    </section>
  );
};

export default Resume;
