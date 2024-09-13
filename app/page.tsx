
"use client"; 
import Head from 'next/head';
import PersonalInfo from '../components/PersonalInfo';
import Education from '../components/Education';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';
import { useState } from 'react';

const Home = () => {
  const [showSkills, setShowSkills] = useState(true);
  const [showEducation, setShowEducation] = useState(true);
  const [showWorkExperience, setShowWorkExperience] = useState(true);

  return (
    <>
      <Head>
        <title>Interactive Resume</title>
        <meta name="description" content="A simple interactive resume using Next.js and TypeScript" />
        <link rel="icon" href="/favicon.ico" />    
      </Head>

    <div className="resume-container">
      <div className='title'><h1><b><u>RESUME BUILDER APP</u></b></h1></div>

      {/* Toggle buttons */}
      <div className="buttons">
        <button onClick={() => setShowSkills(!showSkills)}>
          Toggle Skills
        </button>.
        <button onClick={() => setShowWorkExperience(!showWorkExperience)}> 
          Toggle Work Experience
        </button>.
        <button onClick={() => setShowEducation(!showEducation)}>
          Toggle Education
        </button>
      </div>

    <PersonalInfo />
      <h2><u>Skills</u></h2>
      {showSkills && <Skills />}

      <h2><u>Work Experience</u></h2>
      {showWorkExperience && ( 
        <WorkExperience
          jobTitle="Software Engineer"
          companyName="Tech Corp"
          duration="June 2021 - Present"
          responsibilities={[
            'Developed a React-based web application used by over 1,000 users.',
            'Improved site performance by optimizing the codebase.',
            'Collaborated with cross-functional teams to deliver new features.'
          ]}
        />
      )}

      <h2><u>Education</u></h2>
      {showEducation && (
        <Education
          degree="Certified Applied Cloud Generative AI Engr."
          school="Governor Sindh Initiative for Cloud-Applied Generative AI"
          year="2024"
          details={[]}
        />
      )}
      {showEducation && (
        <Education
          degree="Bachelor of Science in Computer Science"
          school="Sir Syed University of Engineering and Tech."
          year="2021"
          details={[
            'Graduated with Honors',
            'Relevant Coursework: Data Structures, Algorithms, Web Development',
            'Member of the Computer Science Club'
          ]}
        />
      )}

    </div>
    </>
  );
};

export default Home;