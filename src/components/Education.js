import React, { useState } from 'react';
export const Education = () => {
    const educationData = [
      {
        institution: 'V.S. Niketan Higher Secondary School',
        degree: 'SEE',
        fieldOfStudy: 'Schooling',
        startYear: '2005',
        endYear: '2017',
        description: 'Graduated School with a GPA 3.75'
      },
      {
        institution: 'CCRC',
        degree: '+2',
        fieldOfStudy: 'Science',
        startYear: '2017',
        endYear: '2019',
        description: 'Graduated High School with a GPA 3.39'
      },
      {
        institution: 'Himalaya College of Engineering',
        degree: 'Bachelors',
        fieldOfStudy: 'CSIT',
        startYear: '2019',
        endYear: 'present',
        description: 'Current average GPA 3.01'
      }
    ];
        const [selectedEducation, setSelectedEducation] = useState(null);
      
        const handleEducationClick = (education) => {
          setSelectedEducation(education);
        };
      
  
    return (
        <section className='education' id="education">
        <div className="education-container">
          <h1 className="education-title">Education</h1>
          <div className="education-cards">
            {educationData.map((education, index) => (
              <div
                key={index}
                className={`education-card ${
                  selectedEducation === education ? 'selected' : ''
                }`}
                onClick={() => handleEducationClick(education)}
              >
                <h2 className="education-institution">{education.institution}</h2>
                <p className="education-degree">
                  {education.degree}, {education.fieldOfStudy}
                </p>
                <p className="education-years">
                  {education.startYear} - {education.endYear}
                </p>
              </div>
            ))}
          </div>
          {selectedEducation && (
            <div className="education-details">
              <h2 className="education-institution">{selectedEducation.institution}</h2>
              <p className="education-degree">
                {selectedEducation.degree}, {selectedEducation.fieldOfStudy}
              </p>
              <p className="education-description">
                {selectedEducation.description}
              </p>
              <p className="education-years">
                {selectedEducation.startYear} - {selectedEducation.endYear}
              </p>
            </div>
          )}
        </div>
        </section>
      );
  };
  
  export default Education;