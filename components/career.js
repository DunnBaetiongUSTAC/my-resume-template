
import React from 'react';

const sectionStyle = {
  backgroundColor: '#fff',
  margin: '20px',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const h2Style = {
  color: '#333',
};

const Career = () => {
  return (
    <section style={sectionStyle}>
      <h2 style={h2Style}>Career Objective</h2>
      <br></br>
      <p>
        Dedicated and results-driven professional with [X] years of experience in
        [industry]. Seeking a challenging position as [desired position] at [company],
        where I can contribute my skills in [key skill 1, key skill 2, etc.] to achieve
        mutual success.
      </p>
    </section>
  );
};

export default Career;
