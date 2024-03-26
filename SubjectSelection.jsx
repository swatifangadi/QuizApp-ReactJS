// SubjectSelection.jsx
import React from 'react';

const SubjectSelection = ({ onSelect }) => {
  // Function to handle subject selection
  const handleSubjectSelect = (subject) => {
    onSelect(subject);
  };

  return (
    <div className="subject-selection-container">
        <br/>
      <h2>Select a Subject</h2>
      <br/>
      <div className="subject-buttons">
        <center><button onClick={() => handleSubjectSelect('Java')}>Java</button></center>
        <br/>
        <br/>
        <center><button onClick={() => handleSubjectSelect('Python')}>Python</button></center>
        <br/>
        <br/>
        <center><button onClick={() => handleSubjectSelect('General Aptitude')}>General Aptitude</button></center>
        <br/>
        <br/>
      </div>
    </div>
  );
};

export default SubjectSelection;