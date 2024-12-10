import React from "react";


function Member(props){
    return(
<div style={{ fontFamily: 'Arial, sans-serif', margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', maxWidth: '800px' }}>
      {/* Header Section */}
      <header style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1>Noor Mohamed Abdikadir</h1>
        <p style={{ fontStyle: 'italic' }}>Front-End and PHP Developer | Graduate in Information Technology</p>
      </header>

      {/* About Section */}
      <section style={{ marginBottom: '20px' }}>
        <h2>About Me</h2>
        <p>
          I am a passionate front-end developer and PHP developer with a strong foundation in MySQL database management. 
          My career path is centered on developing user-friendly, interactive web solutions and maintaining robust backend systems.
        </p>
      </section>

      {/* Skills Section */}
      <section style={{ marginBottom: '20px' }}>
        <h2>Skills and Expertise</h2>
        <ul>
          <li>React (Specialized in front-end development)</li>
          <li>PHP (Database-driven applications)</li>
          <li>MySQL (Database design and management)</li>
          <li>Microsoft Word and Office Suite</li>
          <li>Python (Beginner)</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section style={{ marginBottom: '20px' }}>
        <h2>Professional Projects</h2>
        <ul>
          <li>
            <strong>Real Estate Website Development:</strong> Designed and developed a complete real estate platform using PHP, HTML, Bootstrap, and MySQLi.
          </li>
          <li>
            <strong>Clothing Store Website:</strong> Collaborated on a website promoting sportswear and casual clothing.
          </li>
        </ul>
      </section>

      {/* Goals Section */}
      <section style={{ marginBottom: '20px' }}>
        <h2>Ongoing Goals</h2>
        <ul>
          <li>Master advanced concepts in React and Python.</li>
          <li>Apply the Pareto principle to learning PHP and achieve expert proficiency.</li>
          <li>Build new projects that showcase my growing technical skill set.</li>
        </ul>
      </section>

      {/* Footer Section */}
      <footer style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.9em', color: '#666' }}>
        © 2024 Noor Mohamed Abdikadir. All rights reserved.
      </footer>
    </div>
  );
    
}

export default Member;