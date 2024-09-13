// components/WorkExperience.tsx
import React from 'react';

interface WorkExperienceProps {
    jobTitle: string;
    companyName: string;
    duration: string;
    responsibilities: string[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({
    jobTitle,
    companyName,
    duration,
    responsibilities,
}) => {
    return (
        <section id="work-experience" className="work-experience">
        
        <div className="work-item">
            <h3>{jobTitle}</h3>
            <p>
            {companyName}, {duration}
            </p>
            <ul>
            {responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
            ))}
            </ul>
        </div>
        </section>
    );
};

export default WorkExperience;
