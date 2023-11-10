import Career from "../../components/career";
import Certifications from "../../components/certifications";
import Education from "../../components/education";
import Heading from "../../components/heading";
import Skills from "../../components/skills";
import WorkExperience from "../../components/workexperience";

import React from "react";


export default function Home() {
  return (
    <div>
      <Heading />
      <Career />
      <Education />
      <Skills />
      <Certifications />
      <WorkExperience />
    </div>
  )
}
