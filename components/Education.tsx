// components/Education.tsx
import React from 'react';

interface EducationProps {
    degree: string;
    school: string;
    year: string;
    details?: string[];  // Optional details (e.g., coursework, honors)
}

const Education: React.FC<EducationProps> = ({ degree, school, year, details }) => {
    return (
        <section id="education" className="education">
        
        <div className="education-item">
            <h3>{degree}</h3>
            <p>
            {school}, {year}
            </p>
            {details && (
            <ul>
                {details.map((detail, index) => (
                <li key={index}>{detail}</li>
                ))}
            </ul>
            )}
        </div>
        </section>
    );
};

export default Education;
