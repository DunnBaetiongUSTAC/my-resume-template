import { list } from "postcss";
import React from "react";

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
  
  const liStyle = {
    marginBottom: '8px',
    color: '#555',
  };

const WorkExperience = () => {
    return ( 
        <section style={sectionStyle}>
        <br></br>
        <h2 style={h2Style}>Experience</h2>
        <p>Cisco - Head Programmer</p>
        <p>Duration: 10/2018 - 12/2022</p>

        <br>
        </br>
        <ul>
          <li style={liStyle}>Team Leader</li>
          <li style={liStyle}>Data Analyst</li>
        </ul>
      </section>
     );
}
 
export default WorkExperience;